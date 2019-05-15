const bodyParser = require("body-parser");
const express = require('express');
const path = require('path');
const { env: { PORT: port = 8000 } } = process;
const app = express();
const mongoose = require('mongoose');
const { Schema } = mongoose;
var session = require('express-session');
var flash = require("express-flash");
const bcrypt = require('bcrypt');
const SALT_WORK_FACTOR = 10;
const uniqueValidator = require('mongoose-unique-validator');

app.use(session({
    secret: 'somethingsecret',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname+ "/static"));

app.set('trust proxy', 1)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

mongoose.connect("mongodb://localhost/first_login_reg",{ useNewUrlParser: true });
mongoose.connection.on("connected", () => console.log("Connected to Mongo"));

const UserSchema = new Schema({
    firstName: {
        type: String,
        trim: true,
        required: [true, "Name is required"],
        minlength: [2, "Please enter a real name"],
        maxlength: [45, "First name cannot be longer than 45 characters."]

    },
    lastName: {
        type: String,
        trim: true,
        required: [true, "Name is required"],
        minlength: [2, "Please enter a real name"],
        maxlength: [45, "Last name cannot be longer than 45 characters."]
    },
    email: {
        type: String,
        trim: true,
        required: [true, "Please enter in an email address."],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
        unique: [true, "Email already taken."]
    },
    birthday: {
        type: Date,
        required: [true, "Please enter in your birthday"]
    },
    password: {
        type: String,
        required: [true, "Please enter in a password."],
        minlength: [8, "Password must be between 8-20 characters."],
        maxlength: [20, "Password must be between 8-20 characters."],
        validate: {
            validator: function(value){
                return  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,20}/.test( value );
            }, message: "Please create a password with at least one uppercase character, a number, and a special character."
        }},
    password2: {
        type: String,
        required:[true,"Please enter your password again."],
        validate: {
            validator: function(value){
                return value == this.password;
            }, message:"Passwords do not match."
        }},
    }, {timestamps: true});

UserSchema.plugin(uniqueValidator, {message: 'is already taken.'});

UserSchema.pre('save', function(next) {
    var user = this;
    // only hash the password if it has been modified (or is new)
    if (!user.isModified('password')) return next();
    // generate a salt
    bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
        if (err) return next(err);
        // hash the password using our new salt
        bcrypt.hash(user.password, salt, function(err, hash) {
            if (err) return next(err);
            // override the cleartext password with the hashed one
            user.password = hash;
            next();
        });
    });
});

UserSchema.methods.comparePassword = function(candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch);
    });
};

const User = mongoose.model("User", UserSchema);

app.get("/", function (request, response) {
    response.render('index');
});

app.post('/create', function (request, response) {
    console.log(request.body);
    //Output: Not the most secure way to handle passwords...
    // { firstName: 'Nina',
    // lastName: 'Tompkin',
    // email: 'nina.tompkin@gmail.com',
    // birthday: '1990-04-30',
    // password: 'Nickycat9!',
    // password2: 'Nickycat9!' }
    User.create(request.body)
        .then(user => {
            console.log("User created succesfully", user);
            //Output unfortunately includes password confirmation unhashed...
            // User created succesfully { _id: 5cdb633a30c967eb2d82211c,
            // firstName: 'Nina',
            // lastName: 'Tompkin',
            // email: 'nina.tompkin@gmail.com',
            // birthday: 1990-04-30T00:00:00.000Z,
            // password:
            // '$2b$10$csqm.vM138.3auQ6CkWzIum0/BGO.1pP6EYe5cYlGu2xet6UjsPaC',
            // password2: 'Nickycat9!',
            // createdAt: 2019-05-15T00:54:18.134Z,
            // updatedAt: 2019-05-15T00:54:18.134Z,
            // __v: 0 }
            response.redirect("/");
        })
        .catch(error => {
            console.log("Something went wrong!", error);
            const errors = Object.keys(error.errors).map(key => error.errors[key].message);
            response.redirect("/");
        })
    //Output:
    // { first_name: 'Nina',
    // last_name: 'Tompkin',
    // email: 'nina.tompkin@gmail.com',
    // birthday: '1990-04-30',
    // password: 'jXJR73ZN',
    // password2: 'jXJR73ZN' }
    
});

app.post('/login', function (request, response) {
    console.log(request.body);
    User.findOne({email: request.body.email})
        .then(user => {
            //Output:
            //{ email: 'nina.tompkin@gmail.com', password: 'Nickycat9!' }
            request.session.user_id = user._id;
            request.session.email = user.email;
            response.render("users/show");
        })
        .catch(error =>{
            response.redirect("/");
        })
});

app.get("/welcome", function (request, response){
    //request.session.user id = undefined
    console.log(request.session.user_id);
    console.log(request.session.email);
    response.render('users/show');
});

app.listen(port, () => console.log(`express server listening on port ${port}`));

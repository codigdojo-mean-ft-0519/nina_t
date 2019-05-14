const bodyParser = require("body-parser");
const express = require('express');
const path = require('path');
const { env: { PORT: port = 8000 } } = process;
const app = express();
const mongoose = require('mongoose');
const { Schema } = mongoose;
var session = require('express-session');

app.use(session({
    secret: 'somethingsecret',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}));

app.use(express.static(__dirname+ "/static"));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb://localhost/first_login_reg",{
    useNewURLParser: true
});
mongoose.connection.on("connected", () => console.log("Connected to Mongo"));

app.get("/", function (request, response) {
    //Code goes here
    response.render('index');
});

app.post('/create', function (request, response) {
    response.redirect("/");
});

app.post('/login', function (request, response) {
    response.render("users/show");
});

app.get("/welcome", function (request, response){
    //Code goes here
    response.render('/users/show');
});

app.listen(port, () => console.log(`express server listening on port ${port}`));

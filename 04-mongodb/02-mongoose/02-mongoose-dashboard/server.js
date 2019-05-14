const bodyParser = require("body-parser");
const mongoose = require('mongoose'); 
const express = require('express');
const path = require('path');
const { env: { PORT: port = 8000 } } = process;
const { Schema } = mongoose;
const app = express();

app.use(express.static(__dirname+ "/static"));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect("mongodb://localhost/rabbits_db", { useNewUrlParser: true });
mongoose.connection.on("connected", () => console.log("Connected to Mongo!"));

//create rabbit blueprint
const RabbitSchema = new Schema({
    name:{
        type: String,
        required: [true, "Please enter in a name for your rabbit."]
    },
    breed:{
        type: String,
        required: [true, "Breed is required"],
    },
    age: {
        type: Number,
        required: true,
        min: [0, "Rabbits can't be negative ages"],
        max: [3, "Rabbits can't live longer than 3 years"],
    }
});

const Rabbit = mongoose.model("Rabbit",RabbitSchema);

//ROUTING STARTS HERE

//Displays all the rabbits
app.get("/", function (request, response) {
    Rabbit.find({})
        .then(rabbits => response.render("index", { rabbits: rabbits }))
        .catch(console.log);
});

app.post("/rabbits", function(request, response){
    Rabbit.create(request.body)
        .then(rabbit => {
            console.log(rabbit);
            response.redirect("/");
        })
        .catch(console.log);
});

//Displays info about one rabbit
app.get("/rabbits/new", function (request, response) {
    response.render("rabbits/index");
});

//Displays info about one rabbit
app.get("/rabbits/:id", function (request, response) {
    Rabbit.find({ _id: request.params.id })
        .then(rabbit => {
            console.log(rabbit);
            response.render("rabbits/show", {rabbit: rabbit});
        })
        .catch(console.log);
});

//Should show a form to edit an existing mongoose
app.get("/rabbits/edit/:id", function(request,response){
    Rabbit.find({ _id: request.params.id })
        .then(rabbit => {
            console.log(rabbit);
            response.render("rabbits/edit", {rabbit: rabbit });
        })
        .catch(console.log);
});

//Should be the action attribute for the form in the above route
app.post("/rabbits/:id", function(request, response){
    Rabbit.update({ _id: request.params.id }, {name: request.body.name}, {breed: request.body.breed}, {age: request.body.age})
        .then(rabbit => {
            console.log(rabbit);
            response.redirect("/");
        })
        .catch(console.log);
});

//Should delete the mongoose from the database by ID
app.get("/rabbits/destroy/:id", function(request,response){
    Rabbit.remove({ _id: request.params.id})
        .then(rabbit => {
            response.redirect("/");
        })
        .catch(console.log);
});

app.listen(port, () => console.log(`express server listening on port ${port}`));

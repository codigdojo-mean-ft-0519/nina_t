var express = require("express");

var app = express();

app.use(express.static(__dirname + "/static"));
app.use(express.static(__dirname + "/static/images"));
app.set('views', __dirname + "/views");
app.set('view engine', 'ejs');

app.get("/pets",function (request, response){
    response.render("pets");
})

app.get("/pets/max",function(request, response){
    var max_array = [
        {name: "Max", img: "/images/pet1.png", favorite_food: "Wetfood", age: "1", sleeping_spots: ["Under the bed","On the couch"]}
    ];
    response.render("details", {pet: max_array});
})
app.get("/pets/duke", function(request, response){
    var duke_array = [
        {name: "Duke", img: "/images/pet2.png", favorite_food: "dryfood", age: "3", sleeping_spots: ["In a sunny spot","By the door"]}
    ];
    response.render("details", {pet: duke_array});
})
app.get("/pets/mel", function(request, response){
    var mel_array = [
        {name: "Mel", img: "/images/pet3.png", favorite_food: "human food", age: "2", sleeping_spots: ["In his crate","In the car"]}
    ];
    response.render("details", {pet: mel_array});
})
app.listen(8000, function(){
    console.log("listening on port 8000");
})
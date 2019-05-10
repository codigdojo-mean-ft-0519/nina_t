const bodyParser = require('body-parser');
const express = require("express");
const path = require("path");

const port = process.env.PORT || 8000;
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "/views"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/static"));

app.get("/", function (request,response){
    console.log('hello');
    response.render('index');
});

// app.post('/process',function (request, response){
//     console.log(request);
//     response.redirect("/result");
// });

app.post("/result",function(request, response){
    console.log("here are our results!");
    console.log(request.body);
    const user_info = {name: request.body.full_name, location: request.body.dojo_location, language: request.body.fav_language, comment: request.body.comment} 
    console.log(`Our users' name is ${request.body.full_name}`)
    response.render("result.ejs",{user: user_info});
});


app.listen(port, () => console.log(`express server listening on port ${port}`)); 
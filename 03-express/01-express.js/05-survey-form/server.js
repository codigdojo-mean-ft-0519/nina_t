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

app.get("/result",function(request, response){
    console.log("here are our results!");
    response.render("result.ejs");
});

app.post('/process',function (request, response){
    console.log(request);
    response.redirect("/result");
});

app.listen(port, () => console.log(`express server listening on port ${port}`)); 
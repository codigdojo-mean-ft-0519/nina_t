var express = require("express");
var session = require("express-session");
var app = express();

app.use(express.static(__dirname + "/static"));
app.use(express.static(__dirname + "/static/images"));
app.use(session({
    secret:'thisissosecret',
    resave: false,
    saveUninitialized: true,
    cookie: {maxAge : 60000}
}));
app.set("views", __dirname + "/views");
app.set("view engine","ejs");

app.get('/', function(request,response){
    response.render("index");
})

app.post('/count', function(request,response){
    count += 1;
    response.redirect('/');
});

app.listen(8000, function(){
    console.log("listening on port 8000");
})
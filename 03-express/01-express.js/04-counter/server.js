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
    console.log(`Request.session gives us....${request.session}`);
    console.log(`Request.session.count gives us...${request.session.count}`);
    if (request.session.count==undefined){
        request.session.count = 0;
    }
    else{
        request.session.count += 1;
    }
    response.render("index", {count:request.session.count});
})

app.post('/count', function(request,response){
    request.session.count += 1;
    response.redirect('/');
});

app.get('/destroy',function(request,response){
    request.session.count=undefined;
    response.redirect('/');
});

app.listen(8000, function(){
    console.log("listening on port 8000");
})
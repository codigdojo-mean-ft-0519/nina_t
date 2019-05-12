const express = require('express');
const path = require('path');
const app = express();
const port = app.listen(8000,function(){
    console.log("running on port 8000 successfully!")
});
var session = require('express-session');
const io = require('socket.io')(port);

app.use(session({
    secret: 'somethingsecret',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
   }));
app.use(express.static(__dirname+ "/static"));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get("/", function (request, response) {
    response.render("index");
});

io.on("connection", function(socket){
    console.log("We're connected!");
    //I've got to make some logic that keeps track of whether or not the "this_user" is in our system yet.
    socket.emit("prompt", function(){
    });

});

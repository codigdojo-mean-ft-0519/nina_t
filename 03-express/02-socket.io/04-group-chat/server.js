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

var users_array = [];
var messages_array = [];

io.on("connection", function(socket){
    console.log("We're connected!");
    //I've got to make some logic that keeps track of whether or not the "this_user" is in our system yet.
    socket.on("im_new_here", function(){
        socket.emit("prompt", function(){
        });
    });
    socket.on("got_a_new_user", function(data){
        let new_user = {
            name:data,
            id:socket.id
        };
        users_array.push(new_user);
        socket.emit("return_user",{user:new_user, all_messages:messages_array});
    });
    socket.on("posting_message", function(data){
        console.log("The message author is "+data.author)
        console.log("The message author is "+data.author_id)
        var chat_content = {message: data.message, author: data.author}
        messages_array.push(chat_content);
        io.emit("new_message",{message:chat_content, all_messages:messages_array})
    });
});

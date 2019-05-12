const express = require("express");
const path = require('path');
const app = express();
const server = app.listen(8000,function(){
    console.log("running on port 8000 successfully!")
});
var io = require("socket.io").listen(server);

app.use(express.static(__dirname+ "/static"));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get("/", function (request, response) {
    response.render('index');
});

io.sockets.on('connection', function (socket){
    var count = 0;
    socket.on("counting",function(data){
        count ++;
        socket.emit("new_number", {count: count})
    });
    socket.on("destroy", function(data){
        count = 0;
        socket.emit("new_number", {count:count})
    });
});
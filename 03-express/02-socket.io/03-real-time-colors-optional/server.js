const express = require('express');
const path = require('path');
const app = express();
const port = app.listen(8000,function(){
    console.log("running on port 8000 successfully!")
});
const io = require('socket.io')(port);

app.use(express.static(__dirname+ "/static"));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
//stuff 
app.get("/", function (request, response) {
    response.render("index");
});

io.on("connection",function(socket){
    console.log("We're connected!")
    socket.on("update_color", function(data){
        let new_color = data;
        console.log(new_color);
        io.emit("updateAllClients", { color: new_color });
    });
});
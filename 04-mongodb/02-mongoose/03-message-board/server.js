const bodyParser = require("body-parser");
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const { Schema } = mongoose;
const { env: { PORT: port = 8000 } } = process;
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(__dirname+ "/static"));
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect("mongodb://localhost/messages_and_comments",{
    useNewURLParser: true
});

const CommentSchema = new Schema({
    author: {
        type: String,
        required: [true, "Please provide your name"],
        trim: true
    },
    commentContent: {
        type: String,
        required: [true, "Please write out your message"],
        trim: true
    },
    message: {
        type: Schema.Types.ObjectId,
        ref: "Message",
        required: true
    }
});

const MessageSchema = new Schema({
    author: {
        type: String,
        required: [true, "Please provide your name"],
        trim: true
    },
    messageContent: {
        type: String,
        required: [true, "Please write out your message"],
        trim: true
    },
    comments: [
        {
            type: Schema.Types.ObjectId,
            ref: "Comment"
        }
    ]
});

const Message = mongoose.model("Message",MessageSchema);
const Comment = mongoose.model("Comment",CommentSchema);


app.get("/", function(request,response){
    Message.find({})
        .then(messages => response.render("index", {messages}))
        .catch(console.log);
});

app.post("/messages",function(request,response){
    console.log(request.body);
    Message.create(request.body)
        .then(message=>{
            console.log(message);
            response.redirect("/");
        })
        .catch(console.log);
    //Output
    //{ author: 'Nina Tompkin',
//   messageContent: 'Hi there! My name is Nina and I\'m a coder.' }
});

app.post("/comment/:id",function(request,response){
    const messageId = request.params.id;
	Message.findOne({ _id: messageId }, function(err, message) {
        newComment = new Comment(request.body)
        console.log(newComment);
		newComment.message = message._id;
		Message.update({ _id: message._id }, { $push: { comments: newComment }}, function(err) {
		});
		newComment.save(function(err) {
			if (err) {
				console.log(err);
				response.render('index.ejs', { errors: newComment.errors });
			} else {
				console.log("comment added");
				response.redirect("/");
			}
		});
	});
});

mongoose.connection.on("connected", () => console.log("Connected to Mongo!"));

app.listen(port, () => console.log(`express server listening on port ${port}`));
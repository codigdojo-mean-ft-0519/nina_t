const parser = require('body-parser');
const mongoose = require('mongoose');
const express = require('express');
const path = require('path');
const { env: { PORT: port = 8000 } } = process;
const { Schema } = mongoose;
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(__dirname+ "/static"));
app.use(parser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

mongoose.connect('mongodb://localhost/authors_and_books', {
  useNewUrlParser: true,
  useCreateIndex: true
});
mongoose.connection.on('connected', () => console.log('Connected to Mongo'));

const QuoteSchema = new Schema({
    author: {
        type: String,
        required: [true, "Please provide an author name"],
        minlength: 2,
        maxlength: 45,
        trim: true,
    },
    quote: {
        type: String,
        required: [true, "Please enter a quote"],
        minlength:2,
        maxlength: 225,
        trim:true,
    }
},{timestamps: true}
);

const Quote = mongoose.model("Quotes",QuoteSchema);

require('./server/config/routes.js')(app)

app.listen(port, () => console.log(`express server listening on port ${port}`));
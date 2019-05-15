const mongoose = require('mongoose');
const { Schema } = mongoose;

var Quotes = require("./models/quotes");

mongoose.connect('mongodb://localhost/authors_and_books', {
  useNewUrlParser: true,
  useCreateIndex: true
});

var routes = require("./routes/index");

mongoose.connection.on('connected', () => console.log('Connected to Mongo'));

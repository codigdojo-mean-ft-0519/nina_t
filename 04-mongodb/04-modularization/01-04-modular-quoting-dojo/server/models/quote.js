const mongoose = require('mongoose');

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
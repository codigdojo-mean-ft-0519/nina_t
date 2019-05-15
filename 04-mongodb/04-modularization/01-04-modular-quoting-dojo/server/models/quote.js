const mongoose = require('mongoose');
const { Schema } = mongoose;

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

module.exports = mongoose.model("Quotes",QuoteSchema);
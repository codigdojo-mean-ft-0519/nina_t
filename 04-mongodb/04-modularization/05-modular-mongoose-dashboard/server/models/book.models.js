const mongoose = require('mongoose'); 
const { Schema } = mongoose;

const RabbitSchema = new Schema({
    name:{
        type: String,
        required: [true, "Please enter in a name for your rabbit."]
    },
    breed:{
        type: String,
        required: [true, "Breed is required"],
    },
    age: {
        type: Number,
        required: true,
        min: [0, "Rabbits can't be negative ages"],
        max: [3, "Rabbits can't live longer than 3 years"],
    }
});

module.exports = mongoose.model("Rabbit",RabbitSchema);

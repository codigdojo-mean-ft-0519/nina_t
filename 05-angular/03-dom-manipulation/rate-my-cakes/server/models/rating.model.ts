const mongoose = require('mongoose');
const { Schema } = mongoose;

const RatingSchema = new Schema({
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5
  }
  comment: {
    type: String
  }
  associatedCake: [CakeSchema]

})

module.exports = mongoose.model('Rating', RatingSchema);

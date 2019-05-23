const mongoose = require('mongoose');

const RatingSchema = mongoose.Schema({
  rating: {
    type: Number,
    required: true,
    minimum: 1,
    maximum: 5
  },
  comment: {
    type: String,
    required: false
  },
});
const CakeSchema = new mongoose.Schema({
  bakedBy: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  },
  rating_info: [RatingSchema],
}, {
  timestamp: true
});

module.exports = mongoose.model('Cake', CakeSchema);

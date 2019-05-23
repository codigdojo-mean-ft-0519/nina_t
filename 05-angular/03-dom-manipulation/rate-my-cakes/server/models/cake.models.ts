const mongoose = require('mongoose');
const { Schema } = mongoose;

const CakeSchema = Schema(
  {
    baker: {
      type: String,
      required: true,
      trim: true,
    },

    imgPath: {
      type: String,
      required: true,
      trim: true,
    },
    rating: [ratingSchema],
  },
  {
    timestamps: true,
  }
);
//This should match what's in mongoose?
module.exports = mongoose.model('Cake', CakeSchema);

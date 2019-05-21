const mongoose = require('mongoose');
const {
  Schema
} = mongoose;

const RestfulTaskSchema = Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },

  description: {
    type: String,
    required: true,
    trim: true,
  },
  completed: {
    type: Boolean,
    default: false,
    required: true,
    trim: true,
  },
}, {
  timestamps: true
});

module.exports = mongoose.model('Task', RestfulTaskSchema);

const mongoose = require('mongoose');
const {
  Schema
} = mongoose;

const TaskSchema = new Schema({
  title: {
    type: String,
    default: ''
  },
  description: {
    type: String,
    default: ''
  },
  completed: {
    type: Boolean,
    default: false,
  }
}, {
  timestamps: true
});

module.exports = mongoose.model("Task", TaskSchema);

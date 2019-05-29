const mongoose = require('mongoose');
const {
  Schema
} = mongoose;

const NoteSchema = new Schema({
  note: {
    type: String,
    required: true,
    minlength: [3, "Note is too short"]
  }
}, {
  timestamp: true
})

module.exports.NoteSchema = mongoose.model('Note', NoteSchema);

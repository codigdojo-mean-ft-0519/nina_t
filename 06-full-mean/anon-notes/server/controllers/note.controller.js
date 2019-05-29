const mongoose = require('mongoose');
const Note = mongoose.model('Note');

module.exports = {
  index(request, response) {
    Note.find({})
      .then(notes => response.json(notes))
      .catch(error => response.json(error));
  },
  create(request, response) {
    Note.create(request.body)
      .then(note => response.json(note))
      .catch(error => response.json(error));
  }
};

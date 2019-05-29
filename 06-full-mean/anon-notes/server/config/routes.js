const NoteController = require('../controllers/note.controller');
const path = require('path');

module.exports = function (app) {
  console.log('Loading routes...');

  app.get('/notes', function (request, response) {
    NoteController.index(request, response);
  });

  app.post('/notes', function (request, response) {
    NoteController.create(request, response);
  });

  app.get('*', function (request, response) {
    const filePath = path.join(__dirname, "../../dist/anon-notes/index.html");
    response.sendFile(filePath);
  });

};

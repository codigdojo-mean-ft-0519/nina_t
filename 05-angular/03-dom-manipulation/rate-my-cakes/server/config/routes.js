const RestfulCakeController = require('../controllers/cake.controller');

module.exports = function (app) {
  console.log('Loading routes... ');

  //GET: Retrieve all Tasks
  app.get('/cakes', function (request, response) {
    RestfulCakeController.index(request, response);
  });

  //GET: Retrieve a Task by ID
  app.get('/cakes/:_id', function (request, response) {
    RestfulCakeController.show(request, response);
  });

  //POST: Create a Task
  app.post('/cakes', function (request, response) {
    RestfulCakeController.create(request, response);
  });

  //PUT: Update a Task by ID
  app.put('/cakes/:_id', function (request, response) {
    RestfulCakeController.update(request, response);
  });

};

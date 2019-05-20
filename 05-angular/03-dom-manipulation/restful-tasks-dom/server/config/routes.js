const RestfulTaskController = require('../controllers/restful-api.controller');

module.exports = function (app) {
  console.log('Loading routes... ');

  //GET: Retrieve all Tasks
  app.get('/tasks', function (request, response) {
    RestfulTaskController.index(request, response);
  });

  //GET: Retrieve a Task by ID
  app.get('/tasks/:_id', function (request, response) {
    RestfulTaskController.show(request, response);
  });

  //POST: Create a Task
  app.post('/tasks', function (request, response) {
    RestfulTaskController.create(request, response);
  });

  //PUT: Update a Task by ID
  app.put('/tasks/:_id', function (request, response) {
    RestfulTaskController.update(request, response);
  });

  //DELETE: Delete a Task by ID
  app.delete('/tasks/:_id', function (request, response) {
    RestfulTaskController.destroy(request, response);
  });
};

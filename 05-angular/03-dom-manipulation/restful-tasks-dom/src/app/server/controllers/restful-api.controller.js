const mongoose = require('mongoose');
const RestfulTask = mongoose.model('RestfulTask');

module.exports = {
  //GET: Retrieve all Tasks
  index(request, response) {
    RestfulTask.find({})
      //When we retrieve all the content we've requested, then send it back as a json response back to the client
      .then(tasks => response.json(tasks))
      //Instead of the above the platform style would have been passing in an object.
      //The key "tasks" would be an array of tasks
      //.then(resttasks => response.json({tasks: resttasks}));
      .catch(error => response.json(error));
  },
  //GET: Retrieve a Task by ID
  show(request, response) {
    RestfulTask.findOne(request.params)
      .then(task => {
        response.json(task ? task : 'Not in there');
      })
      .catch(error => response.json(error));
  },

  //POST: Create a Task
  create(request, response) {
    console.log('insde create', request.body);
    RestfulTask.create(request.body)
      .then(task => response.json(task))
      .catch(error => response.json(error));
  },

  //PUT: Update a Task by ID
  update(request, response) {
    console.log('request stuff', request.params, request.body);
    RestfulTask.findByIdAndUpdate(request.params._id, request.body, {
        new: true
      })
      .then(task => response.json(task))
      .catch(error => response.json(error));
  },

  //DELETE: Delete a Task by ID
  destroy(request, response) {
    RestfulTask.remove(request.params)
      .then(result => response.json(result))
      .catch(error => response.json(error));
  },
};

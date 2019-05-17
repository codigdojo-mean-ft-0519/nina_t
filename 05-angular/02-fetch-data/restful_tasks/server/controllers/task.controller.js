const mongoose = require('mongoose');
const Task = mongoose.model("Task");

module.exports = {
  //GET: Retrieve all Tasks
  index(request, response) {
    Task.find(request.body)
      .then(tasks => response.json(tasks))
      .catch(error => response.json(error));
  },
  //GET: Retrieve a Task by ID
  show(request, response) {
    Task.findById(request.params.id)
      .then(task => response.json(task))
      .catch(error => response.json(error));
  },
  //POST: Create a Task
  create(request, response) {
    Task.create(request.body)
      .then(task => response.json(task))
      .catch(error => response.json(error));
  },
  //PUT: Update a Task by ID
  update(request, response) {
    Task.findByIdAndUpdate(request.params.id, request.body, {
        new: true
      })
      .then(task => response.json(task))
      .catch(error => response.json(error))
  },
  //DELETE: Delete a Task by ID
  destroy(request, response) {
    Task.findByIdAndDelete(request.params.id)
      .then(result => response.json(result))
      .catch(error => response.json(error));
  },
};

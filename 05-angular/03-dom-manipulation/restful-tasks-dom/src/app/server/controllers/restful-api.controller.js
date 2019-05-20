const mongoose = require('mongoose');
const RestfulTask = mongoose.model('RestfulTask');

module.exports = {
  //GET: Retrieve all Tasks
  index(request, response) {
    RestfulTask.find({})
      .then(task => response.json(task))
      .catch(error => response.json(error));
  },
  //GET: Retrieve a Task by ID
  show(request, response) {
    console.log('request params', request.params);
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

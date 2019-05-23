const mongoose = require('mongoose');
const CakeSchema = mongoose.model('Cake');

module.exports = {
  //GET: Retrieve all Cake
  index(request, response) {
    CakeSchema.find({})
      .then(cakes => response.json(cakes))
      .catch(error => response.json(error));
  },
  //GET: Retrieve a Cake by ID
  show(request, response) {
    console.log("From our controller...", request.params)
    CakeSchema.findOne(request.params)
      .then(cake => {
        response.json(cake ? cake : 'Not in there');
      })
      .catch(error => response.json(error));
  },

  //POST: Create a Cake
  create(request, response) {
    console.log('insde create', request.body);
    CakeSchema.create(request.body)
      .then(cake => response.json(cake))
      .catch(error => response.json(error));
  },

  //PUT: Update a Cake by ID
  update(request, response) {
    console.log('request stuff', request.params, request.body);
    CakeSchema.findByIdAndUpdate(request.params._id, request.body, {
        new: true
      })
      .then(cake => response.json(cake))
      .catch(error => response.json(error));
  },

};

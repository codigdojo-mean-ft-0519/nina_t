const mongoose = require('mongoose');
const User = mongoose.model("User");

module.exports = {
    index(request, response){
        User.find({})
            .then(user => response.json(user))
            .catch(error => response.json(error));
    },
    show(request,response){
        User.findOne(request.params)
            .then(user => {
                response.json( user ? user: "They weren't around in 1955!");
            })
            .catch(error => response.json(error));
    },
    create(request, response){
        User.create(request.params)
            .then(user => response.json(user))
            .catch(error=> response.json(error));
    },
    destroy(request, response){
        User.remove(request.params)
            .then(result => response.json(result))
            .catch(error => response.json(error));
    },
}

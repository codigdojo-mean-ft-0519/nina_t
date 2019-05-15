const UserController = require("../controllers/user.controller");

module.exports = function(app){
    console.log("Loading routes...");
    
    //Shows a full collection of all people born in 1955
    app.get('/', function (request, response) {
        UserController.index(response,response);
    });
    
    //Bring up the document for that particular user
    app.get("/:name", function (request,response){
        UserController.show(request,response);
    })

    app.get("/new/:name", function (request, response){
        UserController.create(request,response);
    })

    //Delete 1 user with a particular id
    app.get("/remove/:name", function (request, response){
        UserController.destroy(request, response);
    })
}
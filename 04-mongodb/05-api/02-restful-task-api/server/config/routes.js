const TaskController = require("../controllers/task.controller");

module.exports = function(app){
    console.log("Loading routes...");
    
    // GET: Retrieve all Tasks
    app.get('/tasks', function (request, response) {
        TaskController.index(response,response);
    });
    
    // GET: Retrieve a Task by ID
    app.get("/tasks/:id", function (request,response){
        TaskController.show(request,response);
    })
    // POST: Create a Task
    app.post('/tasks', function (request, response){
        TaskController.create(request,response);
    })

    app.put("/tasks/:id",function (request, response){
        TaskController.update(request,response);
    })

    //Delete 1 user with a particular id
    app.delete("/tasks/:id", function (request, response){
        TaskController.destroy(request, response);
    })
}
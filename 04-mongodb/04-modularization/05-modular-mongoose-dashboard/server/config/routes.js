const Quote = mongoose.model("Quote");
//still need models

module.exports = function(app){
    app.get("/", function (request, response) {
        Rabbit.find({})
            .then(rabbits => response.render("index", { rabbits: rabbits }))
            .catch(console.log);
    });
    
    app.post("/rabbits", function(request, response){
        Rabbit.create(request.body)
            .then(rabbit => {
                console.log(rabbit);
                response.redirect("/");
            })
            .catch(console.log);
    });
    
    //Displays info about one rabbit
    app.get("/rabbits/new", function (request, response) {
        response.render("rabbits/index");
    });
    
    //Displays info about one rabbit
    app.get("/rabbits/:id", function (request, response) {
        Rabbit.find({ _id: request.params.id })
            .then(rabbit => {
                console.log(rabbit);
                response.render("rabbits/show", {rabbit: rabbit});
            })
            .catch(console.log);
    });
    
    //Should show a form to edit an existing mongoose
    app.get("/rabbits/edit/:id", function(request,response){
        Rabbit.find({ _id: request.params.id })
            .then(rabbit => {
                console.log(rabbit);
                response.render("rabbits/edit", {rabbit: rabbit });
            })
            .catch(console.log);
    });
    
    //Should be the action attribute for the form in the above route
    app.post("/rabbits/:id", function(request, response){
        Rabbit.update({ _id: request.params.id }, {name: request.body.name}, {breed: request.body.breed}, {age: request.body.age})
            .then(rabbit => {
                console.log(rabbit);
                response.redirect("/");
            })
            .catch(console.log);
    });
    
    //Should delete the mongoose from the database by ID
    app.get("/rabbits/destroy/:id", function(request,response){
        Rabbit.remove({ _id: request.params.id})
            .then(rabbit => {
                response.redirect("/");
            })
            .catch(console.log);
    });
    
}
const mongoose = require("mongoose"), Quote = mongoose.model("Quotes");
const { Schema } = mongoose;


module.exports = function(app){
    app.get("/", function(request,response){
        quotes.index(request,response);
    });

    app.post("/quotes", function(request,response){
        quotes.create(request,response);
    });

    app.get("/quotes", function(request,response){
        quotes.show_all(request,response);
    });
};



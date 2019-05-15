const mongoose = require("mongoose"), Quote = mongoose.model("Quotes");

module.exports = function(app){
    app.get("/", function(request,response){
        response.render("index");
    });

    app.post("/quotes", function(request,response){
        Quote.create(request.body)
            .then(quote => {
                console.log("Success!! Our quote is "+quote);
                response.redirect("/quotes");
            })
            .catch(console.log);
    });

    app.get("/quotes", function(request,response){
        Quote.find({})
            .then(quotes => response.render("quotes/index", {quotes: quotes}))
            .catch(console.log);
    });
}


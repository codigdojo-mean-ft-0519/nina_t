var mongoose = require("mongoose");
var Quote = mongoose.model("Quote");

module.exports = {
    index: function(request, response){
        response.render("index");
    },
    create: function(request, response){
        Quote.create(request.body)
        .then(quote => {
            console.log("Success!! Our quote is "+quote);
            response.redirect("/quotes");
        })
        .catch(console.log);
    },
    show_all: function(request, response){
        Quote.find({})
        .then(quotes => response.render("quotes/index", {quotes: quotes}))
        .catch(console.log);
    }
};
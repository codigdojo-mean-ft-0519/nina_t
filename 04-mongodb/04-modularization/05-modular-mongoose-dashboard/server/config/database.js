const mongoose = require('mongoose'); 
const path = require('path');
//file system...this reads the models directory
const fs = require('fs');
//This gets us a path to the models folder
const modelsPath = path.join(__dirname, "../models");

console.log(modelsPath);

mongoose.connect("mongodb://localhost/rabbits_db", { useNewUrlParser: true });
mongoose.connection.on("connected", () => console.log("Connected to Mongo!"));

//This wil look in the models folder and provide an array of the files in the model
fs.readdirSync(modelsPath).forEach()(file =>{
//This tries to find all of the files that end with .js...
    if (file.endsWith('.js')){
        //and join them up with the directory path and file name for an end result that will get us to the required files.
        require(path.join(modelsPath, file))
    }
})
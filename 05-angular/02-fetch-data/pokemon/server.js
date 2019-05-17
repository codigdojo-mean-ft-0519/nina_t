const express = require('express');
const path = require('path');
const parser = require('body-parser');
const app = express();
const {
  env: {
    PORT: port = 8000
  }
} = process;

app.use(parser.urlencoded({
  extended: true
}));

app.use(parser.json());
//Find the path in the angular.json on line 16
app.use(express.static(path.join(__dirname, "dist/pokemon")));
app.listen(port, () => console.log(`listening on ${port}`))

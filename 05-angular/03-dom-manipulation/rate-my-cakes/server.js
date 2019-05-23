const express = require('express');
const path = require('path');
const parser = require('body-parser');
const {
  env: {
    PORT: port = 8000
  },
} = process;
const app = express();
app.use(
  parser.urlencoded({
    extended: true,
  })
);

//middleware to help us figure out why server not working
app.use(function (request, response, next) {
  console.log(request.url, request.method);
  next();
});

app.use(parser.json());
app.use(express.static(path.join(__dirname, 'dist/rate-my-cakes')));

//NINA YOU DUMMY U FORGOT THIS AND THIS ORDER MATTERS
//CALL THE DATABASE
require('./server/config/database');
//THEN CALL THE ROUTES
require('./server/config/routes')(app);


app.listen(port, () => console.log(`express server listening on port ${port}`));

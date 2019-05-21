const express = require('express');
const path = require('path');
const parser = require('body-parser');
const {
  env: {
    PORT: port = 8000
  }
} = process;
const app = express();

app.use(parser.json());
app.use(express.static(path.join(__dirname, "dist/restful-tasks-interactive")));

//any request we get to our server we'll see where it's going
app.use(function (request, response, next) {
  console.log(request.url);
  next();
})

require('./server/config/database');
require('./server/config/routes')(app);

app.listen(port, () => console.log(`express server listening on port ${port}`));

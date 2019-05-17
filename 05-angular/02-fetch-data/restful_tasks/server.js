const express = require('express');
const path = require('path');
const {
  env: {
    PORT: port = 8000
  }
} = process;
const app = express();
const bodyParser = require('body-parser');
require('./server/config/database')
require('./server/config/routes')(app);

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/public/dist/public')));

app.listen(port, () => console.log(`express server listening on port ${port}`));

const bodyParser = require("body-parser");
const express = require('express');
const { env: { PORT: port = 8000 } } = process;

const app = express();

app.use(express.static(__dirname+ "/static"));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(bodyParser.urlencoded({ extended: true }));

//Having database before routes is CRITICAL!! 
//Otherwise you'll get an error "Schema has not yet been defined"
require('/.server/config/database');
require('/.server/config/routes')(app)


app.listen(port, () => console.log(`express server listening on port ${port}`));

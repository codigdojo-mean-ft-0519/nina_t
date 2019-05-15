const parser = require('body-parser');
const express = require('express');
const path = require('path');
const { env: { PORT: port = 8000 } } = process;
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'client/views'));

app.use(express.static(__dirname+ "/client/static"));
app.use(parser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

require("./server/config/mongoose.js");
const routes_setter = require('./server/config/routes.js');
routes_setter(app);

app.listen(port, () => console.log(`express server listening on port ${port}`));
let express = require('express');
let bodyParser = require('body-parser');
let consign = require('consign');
let expressValidator = require('express-validator');

let app = express();
app.set('view engine', 'ejs');
app.set('views', './app/views');

app.use(bodyParser.urlencoded(
    { extended: true }
));

app.use(expressValidator());

consign()
    .include('app/routes')
    .then('config/db.js')
    .then('app/models')
    .into(app);


module.exports = app;
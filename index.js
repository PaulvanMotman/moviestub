var express = require("express"),
    fs = require('fs'),
    port = process.env.PORT || 2595;

var bodyParser = require('body-parser');
var morgan = require('morgan');
 
var app = express();

app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.set("view options", {
    layout: false
});
app.use(express.static('./public'));
 
app.get('/', function (req, res) {
    res.render('public/index.html');
});
 
app.listen(port);
console.log('Express server running at http://localhost:' + port);
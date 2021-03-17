// load the things we need
var express = require('express');
var path = require('path');  //use path to find the paths of files
const body_parser = require("body-parser"); // lets know how our incoming data will the process
var app = express();


// set the view engine to ejs
app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"));

app.use(body_parser.urlencoded({extended: true}));  //Use the body-parser module to parse the incoming data
app.use(body_parser.json());  //urlencoded() method means the module will parse the data that’ll come from a simple HTML form.  



app.listen(5000);
console.log('Listening on port 5000');

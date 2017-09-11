var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  Task = require('./api/models/user'), 
  bodyParser = require('body-parser'),
  db = require('./db');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/routes');
routes(app);

app.listen(port);

console.log('REST API server started on: ' + port);

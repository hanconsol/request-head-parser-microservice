// index.js
// where your node app starts

// init project
require('dotenv').config();
var express = require('express');
var app = express();
const myRouter = require('./router/api.router.js')

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
var cors = require('cors');
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// router middleware
app.use('/api', myRouter);

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});
/*
// your first API endpoint...
app.get('/api/hello', function (req, res) {
  res.json({ greeting: 'hello API' });
  req
});

// send request ip address
app.get('/api/whoami', function (req, res) {
const lang = req.get('accept-language');
const softW = req.get('accept-encoding');
console.log(req.headers);

  res.json({ ipaddress: req.ip, language: lang, software: softW});
 
});
*/
// listen for requests :)
var listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});

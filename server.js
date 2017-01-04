var express = require('express')
var app = express()

app.use('/', function (req, res) {
  res.send('Hello Earth')
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});

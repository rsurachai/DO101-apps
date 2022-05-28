var express = require('express');
app = express();

app.get('/', function (req, res) {
  res.send('Hello World!\n');
});

app.get('/olive', function (req, res) {
  res.send('Hello olive!\n');
});

app.get('/mars', function (req, res) {
  res.send('Hello mars!\n');
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});


var express = require('express');
var app = express();

var PORT = process.env.PORT || 4096;

app.use(express.static(__dirname + '/public'));
app.get('/*', function(req, res) {
  res.sendFile(__dirname + '/public/index.html');
});

app.listen(PORT, function() {
  console.log('Listening on port %d', PORT);
});
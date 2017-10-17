var express = require('express');
var app = express();
var path = require('path');
app.use(express.static('public'));

app.get('/test', function(req, res){
  res.send('test');
});

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/public/index.html'));
});

// Listen
app.listen(9001, function(){
  console.log('listening on localhost:9001');
});

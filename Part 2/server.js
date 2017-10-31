var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
mongoose.connect('mongodb://127.0.0.1:27017/techknights');
var User = mongoose.model('User', {
  first : String,
  last : String,
  email: String,
  points: {type: Number, default: 0}
});


//expose the files in the public folder so that the HTML can use it
app.use(express.static('public'));

//this is to show a route that will be handled by node
app.get('/test', function(req, res){
  res.send('test');
});

app.get('/data', function(req, res){
  User.find({}, function(err, user){
    res.json(user);
  });
});

app.post('/addUser', function(req, res){

  if(req.body.first && req.body.last && req.body.email){
    var user = new User({
      first : req.body.first,
      last : req.body.last,
      email : req.body.email
    });
    user.save()
  }
  res.sendStatus(200);
});

app.post('/signin', function(req, res){
  console.log(req.body.email);
  console.log(req.body.password);
  res.sendStatus(200);
});

//any request that doesn't match the specified routes made in node will be
//handled by angular in the frontend.
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/public/index.html'));
});

// Listen for requests at this port
app.listen(9001, function(){
  console.log('listening on localhost:9001');
});

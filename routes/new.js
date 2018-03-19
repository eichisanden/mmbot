var express = require('express');
var router = express.Router();
var redis = require('redis');
var client = redis.createClient();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('new', { title: 'Express' });
});

router.get('/message', function(req, res, next) {
  res.render('new-message', { title: 'Express' });
});

router.post('/message', function(req, res, next) {
  console.log('saved');
  var messages = [];
  
  var name = req.params.name;
  var command = req.params.command;
  console.log("name=" + name + ", command=" + command);

  console.log(req.body);

  var message = {name: req.params.name, command: req.params.command};
  messages.push(message.toString());

  client.set('messages', messages);

  res.render('new', { title: 'Express' });
});

router.get('/timer', function(req, res, next) {
  res.render('new-timer', { title: 'Express' });
});

router.post('/timer', function(req, res, next) {
  res.render('new', { title: 'Express' });
});

module.exports = router;

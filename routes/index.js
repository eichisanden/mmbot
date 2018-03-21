var express = require('express');
var router = express.Router();
var redis = require('redis');
var client = redis.createClient();
//var hubot = require('hubot');
var prequire = require('parent-require');
var {Robot,Adapter,TextMessage,User} = prequire('hubot');

/* GET home page. */
router.get('/', function(req, res, next) {
  redisGet(res).then(onResolve, onReject);
});

function redisGet(res) {
  return new Promise(function (resolve, reject) {
    client.get('hubot:storage', function (err, val) {
      if (err) {
        reject(err);
      }

      const data = [];
      data.push(res);
      data.push(val);
      resolve(data);  
    });
  });
}

function onResolve(data) {
  // const j = JSON.parse(val);
  // console.log(JSON.stringify(JSON.stringify(j)));
  // console.log(JSON.stringify(j.cronjob));
  const res = data[0];
  const val = data[1];
  const json = JSON.parse(val);
  res.render('index', { title: 'mmbot', data: JSON.stringify(json.cronjob) });
}

function onReject(err) {
  console.log(err);
}

module.exports = router;

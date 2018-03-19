'use strict';

const express = require('express');
const app = express();
const fs = require('fs');

app.get('/', (req, res) => {
  res.send('Hello world');
  const text = 'hoge hoge and hoge';
  fs.writeFile('./scripts/bot.js', text, (err) => {
    if (err) {
      throw err;
    }
  });
});

app.listen(3000, () => {
  console.log('start listen');
});



var express = require('express');
var app = express();

app.get('/', function(req, res) {
  // res.send('#!/bin/bash' + '\n' +
  //   'file="readme.md"' + '\n' +
  //   'if [ -e "$file" ]; then' + '\n' +
  //   'echo "File exists"' + '\n' +
  //   'else ' + '\n' +
  //   'echo "File does not exist"' + '\n' +
  //   'exit 1' + '\n' +
  //   'fi ');
  res.sendfile("./configure.sh");
});

app.listen(3000, function () {
  console.log('App listening at http://localhost:3000');
});
module.exports = app;

var fs = require('fs');
var util = require('util');

fs.exists('./hello',function(exists) {
  console.error(exists ? "it's there" : "No dir.")
})

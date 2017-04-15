var fs = require('fs');
fs.stat('hello', function(err, stat) {
  if (err) {
    console.log(err);
  } else {
    console.log(stat);
  }
})

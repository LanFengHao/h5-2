var fs = require('fs');
//
// fs.readFile('file.md','UTF-8',function(err,data) {
//   if(err){
//     console.error(err);
//   } else {
//     console.log(data);
//   }
// });
//
// console.log("File read the end!");

var dir = 'tmp';
fs.exists( dir, function(exists) {
  if (exists) {
    fs.rmdir(dir, function(err) {
      if (err) console.log("create", dir, "error");
      else {
        console.log("create", dir, "OK");
      }
    });
  } else {
    fs.mkdir(dir, function(err) {
      if (err) console.log("create", dir, "error");
      else {
        console.log("create", dir, "OK");
      }
    });
  }
});

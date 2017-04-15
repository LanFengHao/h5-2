var fs = require('fs');
var data = "The is write file."
fs.writeFile('./file.md',data,'utf-8',777,'w+',function(err) {
  if (err) {
    console.log(err);
  }
});

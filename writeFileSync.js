var fs = require('fs');
var data = "the write file."

try {
  fs.writeFileSync('./aaa.md',data,'utf-8')
} catch (e) {
  console.log(e);
};

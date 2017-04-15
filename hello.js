var fs = require('fs');

fs.mkdtemp('./aaa', 0o755 ,function() {
  console.log('ok');
})

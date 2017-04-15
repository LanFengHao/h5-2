var http = require('http');
var fs = require('fs');

var serv = http.createServer(function(req, res) {
  if ('/' === req.url) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(fs.readFileSync('./Form.html', 'utf-8'));
} else if('/url' === req.url && 'POST' === req.method){
  console.log(req);
  var name = '';
    req.on('data', function(chunk) {
        name += chunk;
    });
    req.on('end',function() {
      res.writeHead(200, {'Content-Type': 'text/html' });
      res.end(['Your sent a <em>' + req.method + '</em> request',
    '<p>Data:' + decodeURIComponent(name) +'</p>'].join(''));
    fs.write('./bb.md',name,'utf-8');

  });
}
}).listen(3000);
console.log('server: http://localhost:3000');





// var buf = new Buffer(10000);
// fs.open('./Form.html','w',function(err,fd) {
//   if (err) {
//     console.error(err);
//   }
//   fs.read(fd,buf,0,8,null,function(err,bytesRead, buffer) {
//     if (err) {
//       console.error(err);
//     }
//     console.log('bytesRead' +bytesRead);
//     console.log(buf);
//   });
//
//   fs.close(fd,function(err) {
//     if (err) {
//       console.error(err);
//     }
//     // console.log('close--ok');
//   });
// });

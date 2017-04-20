var http = require('http');
var fs = require('fs');

var serv = http.createServer(function(req, res) {
  if ('/' === req.url) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(fs.readFileSync('./Form.html', 'utf-8'));
} else if('/url' === req.url && 'POST' === req.method){
  console.log(req);
  var name = '<hr>\n';
    req.on('data', function(chunk) {
        name += chunk;
    });
    req.on('end',function() {
      name = decodeURIComponent(name);
      var data = fs.readFileSync('./bb.html', 'utf-8');
      name += data;
      fs.writeFileSync('./bb.html',name,'utf-8');
      res.writeHead(200, {'Content-Type': 'text/html' });
      res.end(['<meta charset="utf-8">',
        '<a href="http://localhost:3000">Newly added</a>>',
        '</p>Data:'+name.replace(/&/g,'<br>') + '</p>'].join(''));
  });
}else if ('/info' === req.url) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end(fs.readFileSync('./bb.html', 'utf-8'));
}
}).listen(3000);
console.log('server: http://localhost:3000');

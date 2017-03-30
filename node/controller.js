var http = require('http');
var os = require('os');

http.createServer(function (req, res) {
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.end('Hello from node ' + os.hostname() + '\n');
}).listen(6667);

console.log('Server running at http://localhost:6667/');


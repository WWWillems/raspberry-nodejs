var http = require('http');
var PORT = 8080;

http.createServer(function(req, res){
  res.end("Hello Pi World!");
}).listen(PORT);

console.log("> Started Raspberry Pi node.js server");
console.log("> Visit localhost:" , PORT , " to see your webserver.");

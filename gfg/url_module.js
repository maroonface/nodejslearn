var http = require('http');
var fs = require('fs');
var url = require('url');

http.createServer(function(req,res){
    var q = url.parse(req.url, true);
    var path = '.' + q.pathname;
    fs.readFile(path,function(err, data){
        if(err) {
            res.writeHead(404, {'Content-Type':'text/html'});
            return res.end("404 not found");
        }
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
    });
}).listen(8080);
var http = require('http');
var fs = require('fs');
var formidable = require('formidable');


http.createServer(function (req, res) {
    if(req.url == '/fileup'){
        var form = new formidable.IncomingForm();
        form.parse(req, function(err, fields, files){
            var path = files.fileup.filepath;
            res.write('File uploaded');
            res.end();
            console.log(path);
        });
    } else{
    fs.readFile('demo2.html', function(err,data){
        if(err){
            res.writeHead(404,{'content-type':'text/html'});
            return res.end();
        }
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data)
        return res.end();  
    });    
}
}).listen(8080);
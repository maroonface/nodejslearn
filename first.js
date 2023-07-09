var http = require('http');
//var da = require('./mymod')

//console.log(da.myDateTime());

http.createServer(function (req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write(req.url);
    //res.write("the date and time is" + da.myDateTime());
    res.end();
}).listen(8080);

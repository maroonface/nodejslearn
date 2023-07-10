var http = require('http');
var uc = require('upper-case');
//var da = require('./mymod')

//console.log(da.myDateTime());

http.createServer(function (req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write(uc.upperCase('hello world'));
    //res.write("the date and time is" + da.myDateTime());
    res.end();
}).listen(8080);

var http = require('http');
var fs = require('fs');

//loading a html file on server
http.createServer(function(req,res){
    fs.readFile('demo.html', function(err, data){
        res.writeHead(200, {'Content-Type':'text/html'})
        res.write(data);
        return res.end();
    });
}).listen(8080);

//create a new file using appendFile() method
// add data at end of file everytime

/*fs.appendFile('appendfile_create.txt', 'created by appendFile() method', function(err){
    if(err) throw err;
    console.log("file crested using append method");
});*/

// writeFile help in creating a new file.
/*
fs.writeFile('writefile.txt', 'file completely changed using craeted using writeFile() module', function(err){
    if(err) throw err;
    console.log('file created using writefile');
});*/



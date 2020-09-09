/*36
// create server console status message 

var http = require('http');
var fs = require('fs');//creating fs object
var url =require('url');

http.createServer(function (req, res){ 
	var q = url.parse(req.url, true);
	console.log(q.pathname);
	var filename = "." + q.pathname;
	fs.readFile(filename, function(err, data){
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.write(data);
		console.log("...Incomimg Request: "+ req.url);
		return res.end();
    });
}).listen(8080);
*/

/*37
//show different web pages
console.log("Sever is listening on port 8080...");


var http = require('http');
var fs = require('fs');//creating fs object
var url =require('url');

http.createServer(function (req, res){ 
	var q = url.parse(req.url, true);
	var filename = "." + q.pathname;
	fs.readFile(filename, function(err, data){
		if(err) {
		 	res.writeHead(404, {'Content-Type': 'text/html'});
		 	return res.end("404 NoT found");
		}
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.write(data); //data here is data inside the filename
		return res.end();
    });
}).listen(8080);


console.log("Sever is listening on port 8080...");
*/

/*38
//show an Index Page(Default page)

var http = require('http');
var fs = require('fs');//creating fs object
var url =require('url');

http.createServer(function (req, res){ 
	var q = url.parse(req.url, true);
	var filename = "." + q.pathname;
	if(filename == './'){
		filename = 'fileSystem.html';
	}
	console.log(filename);
	fs.readFile(filename, function(err, data){
		if(err) {
		 	res.writeHead(404, {'Content-Type': 'text/html'});
		 	return res.end("404 NoT found");
		}
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.write(data);
		//console.log("...Incomimg Request: "+ req.url);
		return res.end();
    });
}).listen(8080);


console.log("Sever is listening on port 8080...");*/


var http = require('http');
var fs = require('fs');//creating fs object
var url =require('url');
const PORT = process.env.PORT || 5000
http.createServer(function (req, res){ 
	var q = url.parse(req.url, true);
	var filename = "." + q.pathname;
	if(filename == './'){
		filename = './fileSystem';
	}
	filename = filename + '.html';
	console.log(filename);
	fs.readFile(filename, function(err, data){
		if(err) {
		 	res.writeHead(404, {'Content-Type': 'text/html'});
		 	return res.end("404 NoT found");
		}
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.write(data);
		//console.log("...Incomimg Request: "+ req.url);
		return res.end();
    });
}).listen(PORT);


console.log("Sever is listening on port 8080...");
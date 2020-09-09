/*var http = require('http');
//here http is an object and createServer is a function
http.createServer(function(req , res){ // req for request
	res.writeHead(200 ,{'Content-Type': 'text/html'}); // res for response
	//here 200 means everything is working correct
	//response about the page condition in text form in html => {'Content-Type': 'text/html'}
	res.write(req.url);
	//res.end('<h1>Hello World! My Name is Jhon Elder!</h1>');
	res.end();
}).listen(8080);
*/

/*34. url module
var http = require('http');
var url = require('url');//creating url object

http.createServer(function (req , res){ // req for request
	res.writeHead(200 ,{'Content-Type': 'text/html'}); // res for response
	 var q = url.parse(req.url, true).query;
	 var me = q.Name + " " +q.Sirname;
	res.write(me); 
	res.end();
}).listen(8080);
*/
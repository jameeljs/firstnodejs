var http = require('http');
var url = require('url');
var fs = require('fs');
var url = require('url');

http.createServer(function (req,res) {

	var q  = url.parse(req.url,true);
	//console.log(q.pathname);
	var filename = "." + q.pathname;
	if (filename == './'){
		filename = './bootstrap.html'; 
	}

	fs.readFile(filename, function(err, data){
      if (err){
      	res.writeHead(404, {'Content-Type': 'text/html'});
      	return res.end("404 bad requested");
      }


	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write(data);
	console.log("inclming....." + req.url);
	res.end();

	})


//	var q = url.parse(req.url, true).query;
//	var date = q.year + " " + q.month;

}).listen(8080);

console.log("requested working......")
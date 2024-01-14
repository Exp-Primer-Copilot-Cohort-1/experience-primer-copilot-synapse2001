// Create web server
// 1. create a web server
// 2. read the file comments.json and then send the content back to the client
// 3. if any error occurs, send an error message back to the client
var http = require('http');
var fs = require('fs');
var url = require('url');
var ROOT_DIR = "html/";
http.createServer(function (req, res) {
	// parse URL
	var urlObj = url.parse(req.url, true, false);
	console.log('URL path: ' + urlObj.pathname);
	console.log('URL search: ' + urlObj.search);
	// Read the file
	fs.readFile(ROOT_DIR + urlObj.pathname, function (err, data) {
		if (err) {
			res.writeHead(404);
			res.end(JSON.stringify(err));
			return;
		}
		res.writeHead(200);
		res.end(data);
	});
}).listen(8080);
console.log('Server running at http://localhost:8080/');

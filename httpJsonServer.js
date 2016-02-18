// An HTTP server that serves JSON data upon recieving a GET request 

// Use the fs, http, and url core modules
var http = require("http"), fs = require("fs"), url = require("url");

// Create a server that can talk HTTP
http.createServer(function(request, response) {
	// Use JSON content type header
	response.writeHead(200, {'content-type': 'application/json'});

	// Get properties of request.url
	var urlObj = url.parse(request.url, true);
	var getDate = new Date(urlObj.query.iso);

  	// If path is parsetime:
  	if (/^\/api\/parsetime/.test(urlObj.pathname)) {
  		response.end(JSON.stringify({"hour": getDate.getHours(), "minute": getDate.getMinutes(), "second": getDate.getSeconds()}));
  	}
  	else if (/^\/api\/unixtime/.test(urlObj.pathname)) {
  		response.end(JSON.stringify({"unixtime": getDate.getTime()}));
  	}
  	response.end();

}).listen(process.argv[2]); // listen on port provided by first argument
// An HTTP server that serves the same text file for each request received

// Use the fs and http core modules
var http = require("http");
var fs = require("fs");

// Create a server that can talk HTTP
http.createServer(function(request, response) {
	// Write out response headers
	response.writeHead(200, {'content-type': 'text/plain'});
	// Open the file as a readable stream
  var readStream = fs.createReadStream(process.argv[3]);
    // This just pipes the read stream to the response object (which goes to the client)
  readStream.pipe(response);

}).listen(process.argv[2]); // listen on port provided by first argument
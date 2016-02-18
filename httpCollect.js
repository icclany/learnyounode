// Performs an HTTP GET request to a URL, collecting all data from the server and writing two lines to the console:
//	1. Integer representing the number of characters received from the server
// 	2. Complete string of characters sent by the server

// URL provided is at process.argv[2]

// Use the http core module
var http = require("http");

var output = ""; // Output string

// Execute GET request
http.get(process.argv[2], function (response) {
	// Set encoding to String
	response.setEncoding("utf8");
	// Concatenate data into a string
	response.on("data", function(data) {
		output += data;
	});
	// If error...
	response.on("error", console.error)
	// When stream is finished...
	response.on("end", function(){
		console.log(output.length);
		console.log(output);
	});
});

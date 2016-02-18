// Performs an HTTP GET request to a URL and writes the String contents of each "data" event from the response to a new line on the console.

// URL provided is at process.argv[2]

// Use the http core module
var http = require("http");

// Execute a simple GET request with http.get()
// Callback function's "response" is a Node Stream object
http.get(process.argv[2], function (response) {
	// Set encoding to String
	response.setEncoding("utf8");
	// Listen to events and print to the console
	response.on("data", console.log);
	// If error...
	response.on("error", console.error)
})

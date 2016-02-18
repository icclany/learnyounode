// Uses a single asynchronous filesystem operation to read a file and print the number of newlines to the console

// Full path to the file = process.argv[2]

// Use fs module from Node core library to perform a filesystem operation
var fs = require('fs');

// Read the file, collecting the return value in a callback function
fs.readFile(process.argv[2], 'utf8', function callback(err,buffer) {
	// Count the number of newlines in the string by using String.split()
	// The array returned by split will be 1 longer than the number of newlines.
	console.log(buffer.split("\n").length - 1);
});
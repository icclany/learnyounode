// Uses a single synchronous filesystem operation to read a file and print the number of newilnes to the console

// Full path to the file = process.argv[2]

// Use fs module from Node core library to perform a filesystem operation
var fs = require('fs');

// Read the file, returning a Buffer object containing the complete contents of the file
var buf = fs.readFileSync(process.argv[2]);

// Change the buffer to a string
var str = buf.toString();

// Count the number of newlines in the string by using String.split()
// The array returned by str.split will be 1 longer than the number of newlines.
console.log(str.split("\n").length - 1);
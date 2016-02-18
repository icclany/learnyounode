// This is a program that accepts one or more numbers as command-line arguments and prints the sum of those numbers to the console.

// Array of command-line arguments
// First two entries or array are 'node', and the path to the program
var args = process.argv;

var sum = 0;

for (var i = 2; i < args.length; i++) {
	sum += +args[i];
}

console.log(sum);
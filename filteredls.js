// Prints a list of files in a given directory, filtered by the extension of the files

var fs = require("fs");
var path = require("path");

fs.readdir(process.argv[2], function(error, list) {
		var match = "." + String(process.argv[3]);
		var matchExt = function(el) {
		// Filters for if file extension matches
		return (path.extname(el) === match);
	}
	console.log(list.filter(matchExt).join("\n"));
})
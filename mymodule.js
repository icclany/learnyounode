var fs = require("fs");
var path = require("path");

// Exports a single function
module.exports = function(dir, ext, callback) {
	fs.readdir(dir, function(err, list) {
		// Early return
		if (err) { return callback(err)};

		// No error
		var match = "." + ext;
		var matchExt = function(el) { return (path.extname(el) === match);}
		var filteredList = list.filter(matchExt);
		
         // all went well, call callback with `null` for the error argument
         callback(null, filteredList)
     });
}


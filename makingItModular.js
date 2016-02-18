// Prints a list of files in a given directory, filtered by the file extensions

var mymodule = require("./mymodule.js")

// Read the list of files in a directory
mymodule(process.argv[2], process.argv[3], function(err,data){
         if (err) throw err;
         else console.log(data.join("\n"));
       });

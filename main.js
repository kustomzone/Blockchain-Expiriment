var requires = {
  http   = require("http"),
  fs     = require("fs"),
  bigInt = require("big-integer"),
  colors = require("colors")
};

console.log("Blockchain Expiriment ".blue.bold, "node version ", "0.0.1".green.bold);
console.log("~~[  init  ]~~".rainbow.dim);


//These have to be executed before the node can start.
// Files to be loaded include block and node lists.

console.log("Checking if block folder exists. . .");

try {
    // Query the entry
    stats = requires.fs.lstatSync('./blocks');
    // Is it a directory?
    if (stats.isDirectory()) {
      console.log("Block folder exists.".green);
    } else {
      console.log("Block folder is a file :/ Fixing".yellow);
      requires.fs.mkDirSync('./blocks');
    }
} catch (e) {
    console.log("Block folder does not exist. Creating.".red.bold);
    console.log("If this is your first time executing the node program, ignore this.");
    requires.fs.mkDirSync('./blocks');
}
try {
  var blockList = JSON.parse(requires.fs.readFileSync('./blocks/list.json'));
  console.log("Block list loaded.".green);
} catch (e) {
    if (e.code == 'ENOENT') {
      requires.writeFileSync('./blocks/list.json','[]');
      var blockList = [];
    } else {
      console.log(('Something happened, and when opening the blocklist file, the error ' + e.code + ' was thrown.').bold.red); 
    }
  }
}
}

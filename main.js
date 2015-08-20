var requires = {
  http   = require("http"),
  fs     = require("fs"),
  bigInt = require("big-integer"),
  colors = require("colors")
};

console.log("Blockchain Expiriment ".blue.bold, "node version ", "0.0.1".green.bold);
console.log("~~[  init  ]~~".red.dim);


//These have to be executed before the node can start.
// Files to be loaded include block and node lists.

console.log("Checking if block file exists. . .");

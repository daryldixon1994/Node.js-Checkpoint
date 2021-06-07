const fs = require("fs");
const path = require("path");

 module.exports = function (filename, ext, callback) {
     fs.readdir(filename, function (error, list) {
         if (error) return callback(error);
         list = list.filter((elt) => path.extname(elt) === `.${ext}`);
         callback(null, list);
     });
 };
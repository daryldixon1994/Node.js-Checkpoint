var fs = require("fs");
const path = require("path");

const ex = `.${process.argv[3]}`;

fs.readdir(process.argv[2], function (err, list) {
    if (err) throw err;
    list.forEach(function (file) {
        if (path.extname(file) === ex) {
            console.log(file);
        }
    });
});

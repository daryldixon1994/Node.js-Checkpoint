const mymodule = require("./mymodule");

mymodule(process.argv[2], process.argv[3], function (error, list) {
    if (error) throw error;
    list.forEach(function (file) {
        console.log(file);
    });
});

let x = process.argv.reduce(function (total, current, index) {
    if (index >= 2) {
        return total + (+current);
    } else return 0;
});
console.log(x);

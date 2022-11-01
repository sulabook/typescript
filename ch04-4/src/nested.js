var calc = function (value, cb) {
    var add = function (a, b) { return a + b; };
    function multiply(a, b) { return a * b; }
    var result = multiply(add(1, 2), value);
    cb(result);
};
calc(30, function (result) { return console.log("result is ".concat(result)); });

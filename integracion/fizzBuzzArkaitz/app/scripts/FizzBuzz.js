// APP.FizzBuzz = (function(){})();
define('FizzBuzz', ['Fizz', 'Buzz'], function() {
    console.log('Fizz Buzz app');

    var validators = [];

    var testNumber = function(num){
        var n = num || 1,
            res = [];

        for (var i = 0; i < validators.length; i++) {
            if(validators[i].validate(n)) {
                res.push(validators[i].getValue());
            }
        }

        if(!res.length) {
            res.push(n);
        }

        return res.join('');
    };

    var print = function(num, join){
        var n = num || 1,
            glue = join|| ',',
            res = [];

        for (var i = 1; i <= n; i++) {
            res.push(testNumber(i));
        }

        return res.join(glue);
    };

    var addValidator = function(validator) {
        // TODO: Check if is instance of Validator
        if(validator.hasOwnProperty('validate')) {
            validators.push(validator);
        }
    };

    for (var i = 0; i < arguments.length; i++) {
        addValidator(arguments[i]);
    }

    return {
        testNumber : testNumber,
        print : print,
        addValidator : addValidator
    };
});
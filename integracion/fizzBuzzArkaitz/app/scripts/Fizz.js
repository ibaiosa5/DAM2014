define('Fizz', [], function(){
    'use strict';

    var value = 'Fizz';

    var validate = function(num) {
        var n = num || 1;

        return (n % 3) === 0;
    };

    var getValue = function() {
        return value;
    };

    return {
        validate : validate,
        getValue : getValue
    };
});
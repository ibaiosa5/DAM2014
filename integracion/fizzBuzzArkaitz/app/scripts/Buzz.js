define('Buzz', [], function(){
    'use strict';

    var value = 'Buzz';

    var validate = function(num) {
        var n = num || 1;

        return (n % 5) === 0;
    };

    var getValue = function() {
        return value;
    };

    return {
        validate : validate,
        getValue : getValue
    };
});
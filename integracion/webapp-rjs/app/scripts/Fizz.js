define('Fizz',[],function(){
    'use strict';

    var comprobar = function(number){
        return (number%3)===0;

    };

    var valor= 'fizz';

    return {
        comprobar:comprobar,
        valor:valor
    };
});
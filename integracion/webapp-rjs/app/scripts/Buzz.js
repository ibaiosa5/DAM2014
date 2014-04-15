define('Buzz',[],function(){
    'use strict';

    var comprobar = function(number){
        return (number%5)===0;
    };

    var valor = 'buzz';

    return {
        comprobar:comprobar,
        valor: valor
    };
});
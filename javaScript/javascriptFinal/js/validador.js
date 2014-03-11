var validador=(function(){
    'use strict';
    var requerido = function(valor){
        return !(valor === undefined || valor === null || valor.length === 0 || /^\s+$/.test(valor));
    };
    var email = function(valor){
        return (/^(\w+)((\.|-)(\w+))*@((\w+)\.\w{2,})+$/.test(valor));
    };
    var password = function(valor){
        return (/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/.test(valor));
    };
    var minimo = function(valor){
        return ( valor.length <= 50);
    };

    return {
        requerido : requerido,
        email:email,
        password:password,
        minimo:minimo
    };

})();
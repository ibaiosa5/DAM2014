//Ejercicio 6

var validarDNI = (function(){
    "use strict";
    var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

    var validarLongitud=function(dni){
        return dni&&dni.length==9;
    };

    var validarNumero=function(dni){
        var num=dni && parseInt(dni);
        return !isNaN(num) && num>=0 && num<=99999999;
    };

    var validarLetra=function(dni){
        var num=parseInt(dni);
        var letra=dni.charAt(dni.length-1);
        var index = num % 23;//calcular el modulo 23 del numero para calcular el indice
        return letras[index]==letra;//Comprueba si es la letra correspondiente
    };

    var validarDNI = function(dni){
        return validarLongitud(dni) && validarLetra(dni) && validarNumero(dni);
    };
    return validarDNI;//para que salga fuera para que se pueda usar fuera y no se pueda modificar desde fuera m
                        //mas que la función validarDNI

})();

console.log(validarDNI("712234564"));
console.log(validarDNI("72579515W"));
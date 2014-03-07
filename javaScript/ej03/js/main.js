//Ejercicio 9

var comprobarPalabra = (function(){
    "use strict";
    var comprobarMayuscula=function(palabra){
        var mayus=palabra.toUpperCase();
        return palabra && palabra == mayus;
    };
    var comprobarMinuscula=function(palabra){
        var minus=palabra.toLowerCase();
        return palabra && palabra == minus;
    };
    var comprobarPalabra=function(palabra){
        if(comprobarMayuscula(palabra)) return "mayus";
        else if(comprobarMinuscula(palabra)) return "minus";
        else return "dos";
    }
    return comprobarPalabra;

})();

console.log(comprobarPalabra("AAA"));
console.log(comprobarPalabra("BsdB"));
console.log(comprobarPalabra("asdsad"));
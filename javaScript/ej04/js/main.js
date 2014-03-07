//Ejercicio 10

var comprobarPalindromo = (function(){
    "use strict";
    var comprobarPalindromo=function(palabra){
        var alreves=palabra.split("").reverse().join("");
        return palabra && palabra==alreves;
    };
    return comprobarPalindromo;

})();

console.log(comprobarPalindromo("AAA"));
console.log(comprobarPalindromo("Abb"));
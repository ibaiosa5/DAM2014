(function(){
    "use strict";/*Modo extricto para que cumpla algunas condiciones que de normal no cumple*/
    var meses=["Enero", "Febrero"];
    meses.push("Marzo");/*añadir marzo al array*/
    meses.push("Abril");
    meses.push("Mayo");
    console.log(meses);
    for (var i = 0; i <=meses.length-1;i++){
        console.log(meses[i]);
    };

})();
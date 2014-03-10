(function(){
    "use strict";
    //Numero de enlaces de la pagina
    var enlaces=document.getElementsByTagName("a");//una forma de hacerlo
    console.log(enlaces.length);
    enlaces=document.querySelectorAll("a");//otra forma para hacer
    console.log(enlaces.length);
    console.log(enlaces);

    //Direccion a la que enlaza el penultimo enlace
    var enlace=enlaces[enlaces.length-2];
    console.log(enlace.href);

    //otra forma de hacerlo
    enlace=document.querySelectorAll('a:nth-last-child(2)');
    console.log(enlace[0].href);
    if(enlaces.length>0)
        console.log(enlaces[0].href);

    //numero de enlaces que apuntan a la direccion
    var count=0;
    for (var i = enlaces.length - 1; i >= 0; i--) {
        if(enlaces[i].href=="http://prueba/")
            count++;
    }
    console.log(count);
    //otra forma
    enlaces=document.querySelectorAll('a[href="http://prueba/"]');
    console.log(enlaces);

    //numero de enlaces del tercer parrafo
    var parrafos=document.querySelectorAll("body > p");
    if(parrafos.length>=3){
        enlaces=parrafos[2].querySelectorAll("a");
        console.log(enlaces.length);
    }
    //otra forma no esta bien
    enlaces=document.querySelectorAll('body > p:nth-last-child(3) a');
    console.log(enlaces.length);

})();
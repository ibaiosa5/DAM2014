window.$=Element.prototype.$=function(selector){
    var that=(this instanceof Element) ? this : document;
    var elems = that.querySelectorAll(selector);
    return (elems.length===1) ? elems[0] : elems;
};


var anade=(function(){
    "use strict";

    var lista =$('#lista');
    var lis = lista.children;
    var count=lista.children.length;

    var mostrarTexto =function(e){
        console.log(this);//this hace referencia al elemento al que ha lanzado el evento
        console.log(e);//es el objeto evento
    };

    for (var i = lis.length - 1; i >= 0; i--) {
        lis[i].addEventListener('click',mostrarTexto); //añade listeners a todos los elementos de la lista
    }

    var anade=function (){
        var elemento = document.createElement("li");
        var contenido = document.createTextNode("Elemento "+count);
        elemento.appendChild(contenido);
        //otra forma
        elemento.innerText="Elemento "+count;
        lista.appendChild(elemento);
        elemento.addEventListener('click',mostrarTexto);
        count++;
    };
return anade;
})();



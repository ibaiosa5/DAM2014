window.$=Element.prototype.$=function(selector){
    var that=(this instanceof Element) ? this : document;
    var elems = that.querySelectorAll(selector);
    return (elems.length===1) ? elems[0] : elems;
};


var anade=(function(){
    "use strict";
    var lista =$('#lista');
    var count=lista.children.length;
    var anade=function (){
        var elemento = document.createElement("li");
        var contenido = document.createTextNode("Elemento "+count);
        elemento.appendChild(contenido);
        //otra forma
        elemento.innerText="Elemento "+count;
        lista.appendChild(elemento);
        count++;
    };
return anade;
})();

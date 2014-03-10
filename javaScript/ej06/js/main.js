var muestra=(function(){
    "use strict";
    var muestra=function (){
        var enlaces=document.querySelectorAll(".enlace");
        if(enlaces.length>0){
            enlaces[0].classlist.add('oculto');

            var parrafo=enlaces[0].previousElementSibling;
            var spans=parrafo.querySelectorAll('span.oculto');

            if(spans.length>0){
                spans[0].classlist.remove('oculto');
            }
        }
    };
return muestra;
})();

/*otra forma para hacerlo
window.$=Element.prototype.$=function(selector){
    var that=(this instanceof Element) ? this : document;
    var elems = that.querySelectorAll(selector);
    return (elems.length===1) ? elems[0] : elems;
};
var muestra=(function(){
    "use strict";
    var muestra=function (){
        var enlaces=$(".enlace");
        if(enlaces.length>0){
            enlaces[0].classlist.add('oculto');

            var parrafo=enlaces[0].previousElementSibling;
            var spans=$('span.oculto');

            if(spans.length>0){
                spans[0].classlist.remove('oculto');
            }
        }
    };
return muestra;
})();

*/
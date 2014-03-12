window.$=Element.prototype.$=function(selector){
    var that=(this instanceof Element) ? this : document;
    var elems = that.querySelectorAll(selector);
    return (elems.length===1) ? elems[0] : elems;
};

window.onload = function(){
    var formulario = $("#registro");
    var textos=["Rellene el campo",
                "El password debe tener una longitud mínima de 6 caracteres, y contener al menos una letra minúscula, una letra mayúscula y un dígito.",
                "Esto no es un email",
                "El texto introducido en el campo de comentarios no debe exceder los 50 caracteres."];
    formulario.validar(textos);
};
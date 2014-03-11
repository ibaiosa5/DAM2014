window.$=Element.prototype.$=function(selector){
    var that=(this instanceof Element) ? this : document;
    var elems = that.querySelectorAll(selector);
    return (elems.length===1) ? elems[0] : elems;
};


HTMLFormElement.prototype.validar = function(){
    'use strict';

    var required = function(e){
        if(!validador.requerido(this.value)){
            console.log("Rellene el campo");
        }
    };
    var password = function(e){
        if(!validador.password(this.value)){
            console.log("El password debe tener una longitud mínima de 6 caracteres, y contener al menos una letra minúscula, una letra mayúscula y un dígito.");
        }
    };
    var minimo = function(e){
        if(!validador.minimo(this.value)){
            console.log("El texto introducido en el campo de comentarios no debe exceder los 50 caracteres.");
        }
    };
    var email = function(e){
        if(!validador.email(this.value)){
            console.log("Esto no es un email");
        }
    };

    var input = this.$('input,textarea');
    for (var i = input.length - 1; i >= 0; i--) {
        var tipo = input[i].dataset.validator;
        switch(tipo) {
            case 'required' : input[i].addEventListener('blur', required);break;
            case 'password' : input[i].addEventListener('blur', password);break;
            case 'minimo' : input[i].addEventListener('blur', minimo);break;
            case 'email' : input[i].addEventListener('blur', email);break;
        }
    }

};


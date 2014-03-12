window.$=Element.prototype.$=function(selector){
    var that=(this instanceof Element) ? this : document;
    var elems = that.querySelectorAll(selector);
    return (elems.length===1) ? elems[0] : elems;
};

HTMLFormElement.prototype.validar = function(textos){
    'use strict';
    var leidos=["Rellene el campo",
                "El password debe tener una longitud mínima de 6 caracteres, y contener al menos una letra minúscula, una letra mayúscula y un dígito.",
                "Esto no es un email",
                "El texto introducido en el campo de comentarios no debe exceder los 50 caracteres."];
    if(!(textos === undefined || textos === null || textos.length === 0))leidos=textos;

    var form = this;
    var input = this.$('input,textarea');


    var item = document.createElement('div');

    var validarFormulario=function(e){
        var bien=true;
        for (var i = input.length - 1; i >= 0; i--) {
            var tipo = input[i].dataset.validator;
            switch(tipo) {
                case 'required' : bien=validador.requerido(input[i].value);break;
                case 'password' : bien=validador.password(input[i].value);break;
                case 'minimo' : bien=validador.minimo(input[i].value);break;
                case 'email' : bien=validador.email(input[i].value);break;
            }
        if(!bien){
            e.preventDefault();
        }
        }
    };
    var errorMessage=function(textError,campo){
        item.innerText = textError;
        campo.parentNode.insertBefore(item,campo.nextSibling);
        console.log(item);
    };

    var required = function(e){
        if(!validador.requerido(this.value)){
            errorMessage(leidos[0],this);
        }
    };
    var password = function(e){
        if(!validador.password(this.value)){
            errorMessage(leidos[1],this);
        }
    };
    var minimo = function(e){
        if(!validador.minimo(this.value)){
            errorMessage(leidos[3],this);
        }
    };
    var email = function(e){
        if(!validador.email(this.value)){
            errorMessage(leidos[2],this);
        }
    };


    for (var i = input.length - 1; i >= 0; i--) {
        var tipo = input[i].dataset.validator;
        switch(tipo) {
            case 'required' : input[i].addEventListener('blur', required);break;
            case 'password' : input[i].addEventListener('blur', password);break;
            case 'minimo' : input[i].addEventListener('blur', minimo);break;
            case 'email' : input[i].addEventListener('blur', email);break;
        }
    }

    form.addEventListener('submit', validarFormulario);

};


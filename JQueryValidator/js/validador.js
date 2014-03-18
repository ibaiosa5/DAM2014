(function($){



    $.fn.validate = function(){


        return this.filter('form').each(function(){
            var $this = $(this);
            console.log($this);
            var leidos=["Rellene el campo",
                "El password debe tener una longitud mínima de 6 caracteres, y contener al menos una letra minúscula, una letra mayúscula y un dígito.",
                "Esto no es un email",
                "El texto introducido en el campo de comentarios no debe exceder los 50 caracteres."];
           // if(!(textos === undefined || textos === null || textos.length === 0))leidos=textos;

            var input = $this.find('input,textarea');
            console.log(input);

            var requerido = function(valor){
                return !(valor === undefined || valor === null || valor.length === 0 || /^\s+$/.test(valor));
            };
            var email = function(valor){
                return (/^(\w+)((\.|-)(\w+))*@((\w+)\.\w{2,})+$/.test(valor));
            };
            var password = function(valor){
                return (/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/.test(valor));
            };
            var minimo = function(valor){
                return ( valor !== undefined && valor.length <= 50);
            };


            var required = function(e){
                if(!requerido(this.value)){
                    errorMessage(leidos[0],this);
                }
            };
            var password = function(e){
                if(!password(this.value)){
                    errorMessage(leidos[1],this);
                }
            };
            var minimo = function(e){
                if(!minimo(this.value)){
                    errorMessage(leidos[3],this);
                }
            };
            var email = function(e){
                if(!email(this.value)){
                    errorMessage(leidos[2],this);
                }
            };


            var $item = $('<div/>');

            $this.on('submit', function(e){
                 var bien=true;
                for (var i = input.length - 1; i >= 0; i--) {
                    var tipo = $(input[i]).data('validator');
                    switch(tipo) {
                        case 'required' : bien=requerido($(input[i]).val());break;
                        case 'password' : bien=password($(input[i]).val());break;
                        case 'minimo' : bien=minimo($(input[i]).val());break;
                        case 'email' : bien=email($(input[i]).val());break;
                    }
                    if(!bien){
                        e.preventDefault();
                    }
                }
            });

            for (var i = input.length - 1; i >= 0; i--) {
                var tipo = input[i].data('validator');
                switch(tipo) {
                    case 'required' : $(input[i]).on('blur', required($(input[i]).val()));break;
                    case 'password' : $(input[i]).on('blur', password());break;
                    case 'minimo' : $(input[i]).on('blur', minimo());break;
                    case 'email' : $(input[i]).on('blur', email());break;
                }
            }

        });
    };


})(jQuery);

$('form').validate();
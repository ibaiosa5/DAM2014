(function($){



    $.fn.validate = function(){


        return this.filter('form').each(function(){
            var $this = $(this);
            var leidos={
                "required" : "Rellene el campo",
                "password" : "El password debe tener una longitud mínima de 6 caracteres, y contener al menos una letra minúscula, una letra mayúscula y un dígito.",
                "email" : "Esto no es un email",
                "minimo" : "El texto introducido en el campo de comentarios no debe exceder los 50 caracteres."};
           // if(!(textos === undefined || textos === null || textos.length === 0))leidos=textos;

            var input = $this.find('input,textarea');


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

            var ponerMessage=function(textError, $input){
                var $msg = $input.data('error');
                if(!$msg){
                    $msg = $('<div/>')
                            .text(textError)
                            .css({
                                'color':'red',
                                'text-align':'right',
                                'font-weight': 'bold'
                            });
                    $input.data('error', $msg);
                    $msg.insertAfter($input);
                }
            };

            var borrarMensage=function($input){
                var $msg = $input.data('error');
                if($msg){
                    $msg.remove();
                    $msg=false;
                    $input.data('error', $msg);
                }
            };

            var validador=function(funcion,input,tipo){
               if(!funcion($(input).val())){
                ponerMessage(leidos[tipo],$(input));
               }
               else{
                borrarMensage($(input));
               }
            };

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
                var $input = $(input[i]);
                var tipo = $input.data('validator');
                switch(tipo) {
                    case 'required' : $input.on('blur',function(){
                                    validador(requerido,this,'required');
                                });
                    break;
                    case 'password' : $input.on('blur', function(){
                                    validador(password,this,'password');
                                });

                    break;
                    case 'minimo' : $input.on('blur', function(){
                                    validador(minimo,this,'minimo');
                                });
                    break;
                    case 'email' : $input.on('blur',function(){
                                    validador(email,this,'email');
                                });
                    break;
                }
            }

        });
    };


})(jQuery);

$('form').validate();
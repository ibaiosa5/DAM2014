$(function(){ //para que ejecute cuando la pagina este cargada
    'use strict';

    var $input = $('input[name=q]');
    var $label = $('label[for=q]');
    var texto = $label.text();
    $input.val(texto);
    $label.remove();
    $input.addClass('hint');
    $input.on({
        'focus': function(e) {
            $input.removeClass('hint');
            if($input.val===texto){
                $input.val('');
                //this.value=''; otra forma
            }
        },
        'blur': function(e) {
            $input.addClass('hint');
            if($input.val().length === 0)
                $input.val(texto);
        }
    });
});
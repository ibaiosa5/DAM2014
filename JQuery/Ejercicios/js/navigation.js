$(function(){ //para que ejecute cuando la pagina este cargada
    'use strict';

    var $nav = $('#nav');


    $(document).on('hover', '#nav li', function(e) {
        $(this).addClass('hover').siblings().removeClass('hover');
        var $lista=$(this).find('li');
        if($lista.length){
            console.log($lista);
             $divMod.each(function(idx, el) {
                $lista[idx].slideDown();
            });

        }

    });
});
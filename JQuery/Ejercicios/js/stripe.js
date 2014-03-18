(function($){   //creamos un plugin o extension de jquery para que pìnte las tablas impares

    $.fn.stripe = function(color){
        var c = color|| '#ccc';//si le llega un color como valor a la funcion lo coge si no coge el color #ccc
        return this.filter('table').each(function(){
            var $this = $(this);

            $this.find('tbody tr:odd').css('background-color',c);
        });
    };
})(jQuery);

$('table,div').stripe();//usamos la extension que hemos creado
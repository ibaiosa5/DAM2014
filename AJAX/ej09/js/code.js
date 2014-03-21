$(function(){
    var $div = $('<div/>');
    var $input = $('<input type="text" id="intro"/>');
    var $sugerencias = $('<ul/>');

    $div.appendTo('body');
    $input.appendTo($div);

    Array.prototype.transformar = function(lista){
        console.log(lista);
        var $lista=$(lista);
        $sugerencias.empty();
        $.each($lista,function(idx,el){
            $sugerencias.append($('<li/>',{
                'text': el
                }));
        });
    };

    var autocompleta = function(munValor){
        $.ajax({
        url: 'servidor/autocompletaMunicipios.php',
        type : 'POST',
        data : {municipio : munValor},
        dataType : 'json',
        success: function(data,textStatus, jqXHR) {
            data.transformar(data);
            $div.append($sugerencias);
        }

    });
    };

    $(document).on('keyup','#intro',function(e){
        autocompleta($(this).val());
    });


});
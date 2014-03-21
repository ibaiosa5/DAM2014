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
        if(lista.length>0){
            $.each($lista,function(idx,el){
                $sugerencias.append($('<li/>',{
                    'text': el
                    }));
            });
        }
        else{
            $sugerencias.append($('<li/>',{
                    'text': "No hay coincidencias"
                    }));
        }
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
        var code = e.keyCode;
        if(code==13){
            console.log('enter');
        }
        else if(code==38){
            console.log('up');
        }
        else if(code==40){
            console.log('down');
        }
        else{
            autocompleta($(this).val());
        }
    });

});
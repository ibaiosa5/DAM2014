$(function(){
    var $lista1=$('<select class="provincias">');
    var $lista2=$('<select class="municipios">');
    $.ajax({
        url: 'servidor/cargaProvinciasJSON.php',
        type : 'GET',
        dataType : 'json',
        success: function(data,textStatus, jqXHR) {
            $.each(data,function(idx,el){
                $lista1.append($('<option/>',{
                    'text':el,
                    'value':idx
                }));
            });
            $lista1.appendTo('body');
            $lista2.appendTo('body');
        }
    });
    $(document).on('change','.provincias',function(e){
        if($lista2){$lista2.empty();}
        $.ajax({
        url: 'servidor/cargaMunicipiosJSON.php',
        type : 'POST',
        data : { provincia :  $(this).val()},
        dataType : 'json',
        success: function(data,textStatus, jqXHR) {
             $.each(data,function(idx,el){
                $lista2.append($('<option/>',{
                    'text':el,
                    'value':idx
                }));
            });
        }
        });
    });
});
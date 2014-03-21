$(function(){
  var $lista;
  $(document).on('click','#comprobar', function(e){
    var $login = $('#login').val();
    $.ajax({
      url: '../servidor/compruebaDisponibilidadJSON.php',
      data : { login : $login },
      type : 'GET',
      dataType : 'JSON',
      success: function(data,textStatus, jqXHR) {
        console.log(data.alternativas);
        if(data.disponible==='no'){
          if($lista){$lista.remove();}//si ya se ha creado la lista vaciala
          $lista=$('<ul/>');
          $.each(data.alternativas,function(index,element){
            var $item=$('<li/>');
            $item.append($('<a/>',{
              html:$login+element,
              'class':'alternativa'
            }));
            $lista.append($item);
          });
          $lista.insertAfter($('#comprobar'));
        }
      }

    });
  });

  $(document).on('click','.alternativa',function(e){
    $('#login').val($(this).text());
  });
});
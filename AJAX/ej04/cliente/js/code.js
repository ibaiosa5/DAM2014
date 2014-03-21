$(function(){
  var $lista;
  $(document).on('click','#comprobar', function(e){
    var $login = $('#login').val();
    $.ajax({
      url: '../servidor/compruebaDisponibilidadXML.php',
      data : { login : $login },
      type : 'GET',
      dataType : 'xml',
      success: function(data,textStatus, jqXHR) {
        var $xml = $(data);
        if($xml.find('disponible').text()==='no'){
          if($lista){$lista.remove();}//si ya se ha creado la lista vaciala
          $lista=$('<ul/>');
          $xml.find('login').each(function(index,element){
            var $item=$('<li/>');
            var texto=($login+$(element).text());
            $item.append($('<a/>',{
              html:texto,
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
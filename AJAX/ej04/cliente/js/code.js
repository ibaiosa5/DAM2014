$(function(){
  $(document).on('click','#comprobar', function(e){
    $.ajax({
      url: '../servidor/compruebaDisponibilidadXML.php',
      data : { login : $('#login').val() },
      type : 'GET',
      dataType : 'xml',
      success: function(data,textStatus, jqXHR) {
        var $xml = $(data);
        if($xml.find('disponible').text()==='no'){
          $xml.find('login').each(function(){

          });

        }
        console.log(data);
        console.log($(data).find('disponible').text());
      }

    });
  });

});
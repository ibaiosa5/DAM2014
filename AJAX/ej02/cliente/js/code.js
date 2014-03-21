$(function(){
    var toogleState=true;
    var textos=[];
    var texto;
    var indice=0;
    var intervalID;

    var intervalManager = function (flag, animate, time) {
       if(flag)
         intervalID =  setInterval(animate, time);
       else
         clearInterval(intervalID);
    };

    var segundero = function() {
      $.ajax({
        url: '../servidor/generaContenidos.php',
        success: function(data,textStatus, jqXHR) {
          var time=new Date($.now());
          texto=data+time.getHours()+':'+time.getMinutes()+':'+time.getSeconds();
          textos.push(texto);
          indice++;
          $('#ticker').text(texto);
        }
     });
    /*  $('#ticker').animate({'background-color':'#F00'},100,function(){
                                            $('#ticker').css({'background-color':'#FFF'})});
*/    };

    intervalManager(true,segundero,1000);

   $(document).on('click','#detener',
                    function(e){
                        if(toogleState){intervalManager(false);toogleState=false;}
                        else{toogleState=true;intervalManager(true,segundero,1000);}

                    });
    $(document).on('click','#anterior',
                    function(e){
                            var time=new Date($.now());
                            if(indice-1>=0){
                                indice--;
                            }
                            else{
                                indice=textos.length-1;
                            }
                            $('#ticker').text(textos[indice]);
                           intervalManager(false);
                           toogleState=false;
                    });
    $(document).on('click','#siguiente',
                    function(e){
                            var time=new Date($.now());
                            if(indice+1<textos.length){
                                indice++;
                            }
                            else{
                                indice=0;
                            }
                            $('#ticker').text(textos[indice]);
                            intervalManager(false);
                            toogleState=false;
                    });


});
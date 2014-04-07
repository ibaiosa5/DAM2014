$(function(){

    $(document).on('click','#calcular',function(){
         worker.postMessage({'limite': $('#nprimo')[0].value});
     });

    var worker = new Worker('js/worker.js');
    worker.addEventListener('message', function(e) {
        $('#resultado').append(' '+e.data);
    }, false);

});
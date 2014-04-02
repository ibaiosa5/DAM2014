$(function(){
    var video = $("video").get(0);
    var progress = $('progress').get(0);
    video.volume=0.5;

    $(document).on('click','#iniciar',function(){
        video.play();
     });
    $(document).on('click','#pausar',function(){
        video.pause();
     });
    $(document).on('click','#parar',function(){
        video.pause();
        video.currentTime=0;
     });
    $(document).on('click','#retrocede',function(){
        video.currentTime=video.currentTime-10;
     });
    $(document).on('click','#avanzar',function(){
        video.currentTime=video.currentTime+10;
     });
    $(document).on('click','#inicio',function(){
        video.currentTime=0;
     });
    $(document).on('click','#fin',function(){
        video.currentTime=video.duration;
     });
    $(document).on('click','#pantallaCompleta',function(){
        if (video.requestFullscreen) {
          video.requestFullscreen();
        } else if (video.msRequestFullscreen) {
          video.msRequestFullscreen();
        } else if (video.mozRequestFullScreen) {
          video.mozRequestFullScreen();
        } else if (video.webkitRequestFullscreen) {
          video.webkitRequestFullscreen();
        }
     });
    $(document).on('change','#volumen',function(){
        video.volume=this.value;
     });

    $(video).on('timeupdate',function(){
        var percentage = Math.floor((100 / video.duration)*video.currentTime);
        progress.value = percentage;
    });

});
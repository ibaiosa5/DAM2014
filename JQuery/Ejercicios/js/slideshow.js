$(function(){

    var onSliderBefore=function($slideElement,oldIndex,newIndex){
        console.log($slideElement,oldIndex,newIndex);
    };
    var onSliderAfter=function($slideElement,oldIndex,newIndex){
        console.log($slideElement,oldIndex,newIndex);
    };

    $(".fancybox").fancybox({
          helpers: {
              title : {
                  type : 'float'
              }
          }
      });
    var slider = $('#slideshow').bxSlider({
        'mode': 'fade',
        'controls': false,
        'pager': false,
        'onSliderBefore' : onSliderBefore,
        'onSliderAfter' : onSliderAfter
    });
    $(document).on('click', 'span.siguiente', function(){
        slider.goToNextSlide();
    });
    $(document).on('click', 'span.anterior', function(){
        slider.goToPrevSlide();
    });
});
$(function(){
    'use strict';

    var $boxes = $('.box');
   /* setInterval(function(){  EN JQUERY y DEBAJO EN CSS3
        $boxes.animate({
            'height' : '50px',
            'width' : '50px',
            'color' : 'yellow',
            'backgorund-color' : 'red',
            'font-size' : '18px',
            'left' : '100%'
            }, 1000, function(){
                console.log('Fin de animacion');
            });

    },1000);*/
    var $width = $(document).width;
    $boxes.css({
        'height' : '50px',
        'width' : '50px',
        'color' : 'yellow',
        'font-size' : '18px',
        'background-color' : 'blue',
        '-webkit-transform' : 'translateX(' + ($width -100)+'px)',
        '-webkit-transition-property' : 'all',
        '-webkit-transition-duration' : '1s'
    });


    $boxes.first().animate({

    },1000);
});
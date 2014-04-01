$(function(){
    $(document).on('change', 'input', function(){
      var pro=$('progress');
      pro.value= pro[0].value++;
    });

    Modernizr.load({
    test: Modernizr.inputtypes.datetime,
    yep : '',
    nope: '../lib/vendor/datetime-polyfill.min.js'
    });

});
/*JQUERY

$(function(){
    var $lis = $('li.user');
    $.each($lis,function(ind,elm){

        if($(elm).data('lang')==='es'){
            $(elm).data('lang','es_ES');
        }

        console.log('Name:'+$(this).data('name'));
        console.log('City:'+$(this).data('city'));
        console.log('Language:'+$(this).data('lang'));
        console.log('Food:'+$(this).data('food'));
        console.log('Delete:'+$(this).data('delete'));


        if($(elm).data('delete')===true){
            $(elm).remove();
        }

    });
});*/

(function(){
    "use strict";
    var lis = document.getElementsByTagName("li");
    for (var i = lis.length - 1; i >= 0; i--) {

        if(lis[i].dataset.lang==='es'){
            lis[i].dataset.lang ='es_ES';
        }

        console.log('Name:'+lis[i].dataset.name);
        console.log('City:'+lis[i].dataset.city);
        console.log('Language:'+lis[i].dataset.lang);
        console.log('Food:'+lis[i].dataset.food);
        console.log('Delete:'+lis[i].dataset.delete);

        if(lis[i].dataset.delete==='true'){
            lis[i].parentNode.removeChild(lis[i]);
        }
    }

})();
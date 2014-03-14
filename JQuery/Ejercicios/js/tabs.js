$(function(){ //para que ejecute cuando la pagina este cargada
    'use strict';

    var $divMod = $('div.module');
    $divMod.hide();

    var $pestanas = $('<ul class=tabs></ul>');
    $pestanas.insertBefore($divMod[0]);

    var lis = [];
    $divMod.each(function(idx, el) {
        var $li = $('<li/>');
        var $div = $(el);
        $li.text($div.find('h2').first().text());
        $li.data('div', $div);
        lis.push($li.get(0));
    });
    $pestanas.append(lis);
    var $lis = $(lis);

    $(document).on('click', 'ul.tabs li', function(e) {
        $(this).addClass('current');
        $(this).data('div').show();
        $(this).siblings().removeClass('current');
        $(this).siblings().data('div').hide();
    });
    $divMod.eq(0).show();
    $pestanas.find('li').filter(':first').addClass('current');
});
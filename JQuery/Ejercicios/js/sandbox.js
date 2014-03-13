$(function(){ //para que ejecute cuando la pagina este cargada
    'use strict';

    //Seleccionar todos los elementos div que poseen la clase "module".
    var $divs = $('div.module');
    //console.log($divs);

    //Especificar tres selecciones que puedan seleccionar el tercer ítem de la lista desordenada #myList.
    var $li = $('#myList li').eq(2);
   // console.log($li[0]);
    $li = $('#myList').find('li').eq(2);//otra forma
    //console.log($li[0]);
    $li = $('#myList li:nth-child(3)');//otra forma
    //console.log($li[0]);
    $li = $('#myListItem');//otra forma
    //console.log($li[0]);

    //Seleccionar el elemento label del elemento input utilizando un selector de atributo.
    var $input = $('input.input_text');
    var $label = $input.closest('form').find('label[for="' + $input.attr('name') +'"]');
   // console.log($label);

    //Averiguar cuantos elementos en la página están ocultos (ayuda: .length)
    var $ocultos =$(':hidden');
   // console.log($ocultos.length);

    //Averiguar cuantas imágenes en la página poseen el atributo alt.
    var $img = $('img[alt]');

    //Seleccionar todas las filas impares del cuerpo de la tabla.
    var $filas = $('tbody tr:odd').css('background-color', 'gray');
   // console.log($filas);


    //RECORRER EL DOM

    //Seleccionar todas las imágenes en la página; registrar en la consola el atributo alt de cada imagen.
    var $imgs = $('img[alt]');
    $imgs.each(function(idx, el) {
        console.log($(el).attr('alt'));
    });
    $imgs.each(function(idx, el) {//otra forma
        console.log(el.alt);
    });
    for (var i = $imgs.length - 1; i >= 0; i--) {
        console.log($imgs[i].alt);
    }

    //Seleccionar el elemento input, luego dirigirse hacia el formulario y añadirle una clase al mismo.
    var $input = $('input');
    $input.closest('form').addClass('pepito');

    //Seleccionar el ítem que posee la clase "current" dentro de la lista #myList y remover dicha clase
    // en el elemento; luego añadir la clase "current" al siguiente ítem de la lista.
    var $item = $('#myList li.current');
    $item.removeClass('current');
    var $siguiente = $item.next('li');
    $siguiente.addClass('current');

    //Seleccionar el elemento select dentro de #specials; luego dirigirse hacia el botón submit.
    var $select = $('#specials select');
    var $submit = $select.closest('form').find('input[type="submit"]');

    //Seleccionar el primer ítem de la lista en el elemento #slideshow; añadirle la clase "current"
    //al mismo y luego añadir la clase "disabled" a los elementos hermanos.
    var $item = $('#slideshow li:first');
    $item.addClass('current');
    $item.siblings().addClass('disabled');

    //MANIPULACIÓN

    //Añadir 5 nuevos ítems al final de la lista desordenada #myList.
    var myItems = [], $myList = $('#myList');
    var start, end;
    start =new Date();

    //////////////////
    //La forma lenta y erronea para hacerlo
    /*for (var i = 5000 - 1; i >= 0; i--) {
        $('<li>item ' + i + '</li>').appendTo($myList);
    }
    end = new Date();
    console.log('append dentro del for: '+(end-start));*/

    start=new Date();
    for (var i = 5 - 1; i >= 0; i--) {
        myItems.push('<li>item ' + i + '</li>');
    }
    $myList.append(myItems.join(''));
    end = new Date();
    console.log('append fuera del for: '+(end-start));


    //Remover los ítems impares de la lista.
    $('#myList li:odd').remove();

    //Añadir otro elemento h2 y otro párrafo al último div.module.
    var $ultimo = $('div.module:last');
    var $newH2 = $('<h2>H2</h2>');
    var $newP = $('<p>Nuevo elemento</p>');
    $newH2.appendTo($ultimo);
    $newP.appendTo($ultimo);

    //Añadir otra opción al elemento select; darle a la opción añadida el valor "Wednesday".
    var $select = $('#specials select');
    var $newOption = $('<option/>', {
        value : 'Wednesday',
        html : 'Wednesday'
    });
    $select.append($newOption);


    //Añadir un nuevo div.module a la página después del último; luego añadir una copia de
    //una de las imágenes existentes dentro del nuevo div.
    var $newDivMod = $('<div/>', {
        class : 'module'
    });
    var $last = $('div.module').last;
    $newDivMod.insertAfter($last);
    $('img:first').clone().appendTo($newDivMod);
});
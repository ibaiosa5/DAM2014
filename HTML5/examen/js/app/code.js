$(function() {
    "use strict";
    var info;

    window.indexedDB = window.indexedDB || window.mozIndexedDB ||
                    window.webkitIndexedDB || window.msIndexedDB;

    window.IDBTransaction = window.IDBTransaction ||
                    window.webkitIDBTransaction || window.msIDBTransaction || { READ_WRITE: "readwrite" };
    window.IDBKeyRange = window.IDBKeyRange ||
                    window.webkitIDBKeyRange || window.msIDBKeyRange;


    var db = null;


    var onerror = function (e) {
        console.log(e);
    };

    var addProgramas =function(info){
        var transaction = db.transaction(["programas"], "readwrite");
        var store = transaction.objectStore("programas");
        var programas = {
        "id": info.id,
        "date": info.date,
        "hour": info.hour,
        "players":info.players
        };

        var request = store.put(programas);

        request.onsuccess = function(e) {
            console.log("Sucessful add: "+e);
        };

        request.onerror = function(e) {
            console.log("Error adding: ", e);
        };

        store.transaction.oncomplete = function(event) {
        };

    };

    var open =function  () {
        var version = 2;
        var request = indexedDB.open("tvdb", version);

        request.onupgradeneeded = function(e) {
            db = e.target.result;
            if(db.objectStoreNames.contains("programas"))
                    db.deleteObjectStore("programas");

            db.createObjectStore("programas",
                        { keyPath: "id" });

            if(db.objectStoreNames.contains("concursantes"))
                    db.deleteObjectStore("concursantes");

            db.createObjectStore("concursantes",
                        { keyPath: "id" });

            if(db.objectStoreNames.contains("pruebas"))
                    db.deleteObjectStore("pruebas");

            db.createObjectStore("pruebas",
                        { keyPath: "id" });
        };


        request.onsuccess = function(e) {
            db = e.target.result;
            $.getJSON(
                "data/show.json",
                function(info) {
                    addProgramas(info);
                }
            );
        };
    };

    var mostrarPrograma = function(){

        var transaction = db.transaction(["programas"]);
        var store = transaction.objectStore("programas");

        var cursorRequest = store.openCursor();

        cursorRequest.onsuccess = function(e) {
            var result = e.target.result;
            if(!!result == false) return;

            $('#verPrograma').hide();
            $('#programa').append('<h2>Comienzo del programa '+result.value.id+'</h2>');
            $('#programa').append('<p>Del día: '+result.value.date+'</p>');
            $('#programa').append('<p>'+result.value.hour+'</p>');
            mostrarConcursante(result.value.players[0].player);
            $('#comenzar').show();
            result.continue();
        };
    };

    var mostrarConcursante = function(concursante){
        $('#concursante').append('<h2>Nombre: '+concursante.name+'</h2>');
        $('#concursante').append('<p>Edad: '+concursante.age+'</p>');
        $('#concursante').append('<p>Edad: '+concursante.description+'</p>');
        var img = $('<img/>', {
                    src : concursante.photo
                });
        $('#concursante').append(img);
    };

    var mostrarPruebas = function(){
        var transaction = db.transaction(["programas"]);
        var store = transaction.objectStore("programas");
        var cursorRequest = store.openCursor();

        cursorRequest.onsuccess = function(e) {
            var result = e.target.result;
            if(!!result == false) return;
            var pruebas=result.value.players[0].challenges;
            $('#pruebas').show();
            mostraPrueba(pruebas[0]);
        };
    };

    var mostraPrueba =function(prueba){
        $('#programa').hide();
        $('#concursante').hide();
        sessionStorage.setItem('prueba', JSON.stringify(prueba) );

        $('#opcion1 aside').append($('<p>Nombre: '+prueba.option1.name+' Likes: '+prueba.option1.likes+' Precio: '+prueba.option1.price+'</p>'));
        $('#opcion2 aside').append($('<p>Nombre: '+prueba.option2.name+' Likes: '+prueba.option2.likes+' Precio: '+prueba.option2.price+'</p>'));

        var img1 = $('<img/>', {
                src : prueba.option1.photo
            });
        var img2 = $('<img/>', {
                src : prueba.option2.photo
            });
        $('#opcion1').append(img1);
        $('#opcion2').append(img2);
    };

    var verificarRespuesta = function(){
        var prueba = JSON.parse(sessionStorage.getItem('prueba'));
        if(prueba.selected=='option1'&&($('#opcion1 input').is(':checked'))){
            $('#pruebas').hide();
            $('#respuesta').show();
            $('#respuesta h2').html('Respuesta correcta');
        }
        else if(prueba.selected=='option2'&&($('#opcion2 input').is(':checked'))){
            $('#pruebas').hide();
            $('#respuesta').show();
            $('#respuesta h2').html('Respuesta correcta');
        }
        else{
            $('#pruebas').hide();
            $('#respuesta').show();
            $('#respuesta h2').html('Respuesta incorrecta');
        }
    };

    var mostrarMapa = function(){
        console.log('as');
    };

    open();

    $(document).on('click','#verPrograma',mostrarPrograma);
    $(document).on('click','#comenzar',mostrarPruebas);
    $(document).on('click','#responder',verificarRespuesta);
    $(document).on('click','#siguientePrueba',verificarRespuesta);
    $(document).on('click','#verMapa',mostrarMapa);

});
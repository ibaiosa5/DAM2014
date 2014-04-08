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

    $('#comenzar').hide();

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
            $('#programa').hide();
            $('#concursante').hide();
            result.continue();
        };
    };




    open();

    $(document).on('click','#verPrograma',mostrarPrograma);
    $(document).on('click','#comenzar',mostrarPruebas);


});
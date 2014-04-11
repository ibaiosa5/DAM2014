$(function () {
    "use strict";

    // Obtener los elementos del DOM
    var status=$('#status')[0];
    var input=$('#input')[0];
    var boton=$('#enviar')[0];
    var content=$('#content')[0];

    // Mi color asignado por el servidor
    var myColor = false;
    // Mi nick
    var myName = false;

    var first=true;

    // Comprobar la disponibilidad de Web Socket en el navegador
    if (!Modernizr.websockets) {
        return false;
    }

    window.WebSocket = window.WebSocket || window.MozWebSocket;

    // Abrir la conexion con ws://www.arkaitzgarro.com:1337
    // 1. Al abrir la conexión, solicitar el nick.
    // 2. Controlar posibles errores del servidor.
    // 3. Escucar los mensajes del servidor, y mostrarlos en el elemento "content"
    // 4. La estructura del objeto enviado por el servidor es la siguiente:
    //      {
    //          // Contiene el tipo de mensaje recibido
    //          type : @string in ['color', 'history', 'message'],
    //          // Contiene los datos según el tipo de mensaje recibido
    //          data: @Object {author, text, color, time}
    //      }
    // 5. Enviar un mensaje al pulsar enter. El mensaje enviado es únicamente la cadena de caracteres.


    var socket = new WebSocket('ws://www.arkaitzgarro.com:1337');

    socket.onerror = function(e){
            console.log('Error');
    };

    socket.onopen  = function(e){
     console.log("open");
     solicitarNick();
    };


    socket.onmessage = function(e){
        var data=JSON.parse(e.data);
        escucharMensaje(data);
    };


    var escucharMensaje = function(data){

        if(data.type=='history'){
            var historial =[];
            $.each( data.data, function( ind, el ){
                var date = new Date(el.time);
                var hours = date.getHours();
                var minutes = date.getMinutes();
                var hora =($('<span>'+hours+':'+minutes+'</span>')).css('text-align','right');
                var msg = ($('<p>'+el.author+': '+el.text+' </p>')).css('color',el.color).append(hora);


                historial.unshift(msg);//lo mismo que push pero el ultimo lo coloca primero
            });
            $(content).prepend(historial);
        }

        if(data.type=='color'){
            console.log(data.data);
            myColor=data.data;
            $(status).css('color',myColor);
        }

        if(data.type=='message'){

            var date = new Date(data.data.time);
            var hours = date.getHours();
            var minutes = date.getMinutes();
            var msg = ($('<p>'+data.data.author+': '+data.data.text+' '+hours+':'+minutes+'</p>')).css('color',data.data.color);
            $(content).prepend(msg);
        }



    };
    var solicitarNick = function(){
        $(status).text('Introduce tu nick:');
        $(input).attr('disabled',false);
        $(boton).attr('disabled',false);
    };

    /**
     * Añadir el mensaje a la ventana de chat
     */
    function addMessage(author, message, color, dt) {
        content.prepend('<p><span style="color:' + color + '">' + author + '</span> @ ' +
             + (dt.getHours() < 10 ? '0' + dt.getHours() : dt.getHours()) + ':'
             + (dt.getMinutes() < 10 ? '0' + dt.getMinutes() : dt.getMinutes())
             + ': ' + message + '</p>');
    }
    $(document).on('click','#enviar',function(){
        if(first){
            myName=$(input).val();
            $(status).text(myName);
            first=false;
        }
        socket.send($(input).val());
        $(input).val('');
    });

});
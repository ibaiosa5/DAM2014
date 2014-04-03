$(document).ready(function() {

    var success = function(position){
        crearDiv(position);
        showMap(position);
    };

    var error = function(position){
          console.warn('ERROR(' + err.code + '): ' + err.message);
    };

    var crearDiv = function(position){
        $('<div/>', {
        html : 'Lat: '+position.coords.latitude+' Long: '+position.coords.latitude+' Alt: '+position.coords.altitude+' Accu: '+position.coords.accuracy+' Speed: '+position.coords.speed
    }).insertAfter($('#status'));
    };

    if (navigator.geolocation) {
        navigator.geolocation.watchPosition(success,error, {
            enableHighAccuracy: true,
            timeout: 500000,
        });
    }

    function showMap(position) {
        var mapcanvas = document.createElement('div');
        mapcanvas.id = 'mapcanvas';
        mapcanvas.style.height = '400px';
        mapcanvas.style.width = '560px';

        document.querySelector('article').appendChild(mapcanvas);

        var latlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
        var myOptions = {
            zoom: 15,
            center: latlng,
            mapTypeControl: false,
            navigationControlOptions: {style: google.maps.NavigationControlStyle.SMALL},
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById("mapcanvas"), myOptions);

        var marker = new google.maps.Marker({
            position: latlng,
            map: map,
            title: "¡Usted está aquí!"
        });
    }
});
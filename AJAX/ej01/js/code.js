$(function(){

        $('input#recurso').val(window.location);

    $(document).on('click','#enviar', function(e){
        var $this = $(this);
        var pathname=$('#recurso').val();
        console.log(pathname);
        $.ajax({
            url : pathname,
            dataType : 'text',
            cache : false,
            success : function(data, textStatus, jqXHR){
                $('#contenidos').text(data);
                $('#cabeceras').text(jqXHR.getAllResponseHeaders());
                $('#codigo').text(jqXHR.status+'\n'+jqXHR.statusText);
                console.log(jqXHR);
            },
            error : function(data, textStatus,jqXHR){
                console.log(errorThrown);
            }

        });
    });
});
$(function(){
    $(document).on('change','select[name=day]', function(e){
        var $this = $(this);
        /*$.getJSON('data/specials.json', {data:$this.val()},
            function(data,textStatus, jqXHR){
                console.log(data);
                console.log(textStatus);
                console.log(jqXHR);
            });*/

        //usando el metodo ajax
        $.ajax({
            url : 'data/specials.json',
            data : {data:$this.val()},
            dataType : 'text',          //aqui se podria especificar que lo que esperamos
                                        //es un JSON en ese caso no habria que hacer JSON.parse
            cache : false,
            success : function(data, textStatus, jqXHR){
                console.log(JSON.parse(data));
            },
            error : function(data, textStatus,jqXHR){
                console.log(errorThrown);
            }
        });

    });
});
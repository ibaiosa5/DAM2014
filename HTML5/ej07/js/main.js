$(function(){

    $('#refresh').hide();
    //$('#content').val(sessionStorage.getItem('contenido'));//no muestra si abre otra pestaña
    $('#content').val(localStorage.getItem('contenido'));
    $(document).on('keyup','#content',function(){
       // sessionStorage.setItem('contenido', this.value);
       localStorage.setItem('contenido',this.value);
    });

    $(document).on('click','#refresh',function(){
        $('#content').val(localStorage.getItem('contenido'));
        $(this).hide();
    });

    function handleStorage(event) {
        if (event.newValue != event.oldValue) {
            $('#refresh').show();
        }
    }
    if(window.addEventListener)window.addEventListener('storage', handleStorage, false);
    else window.attachEvent('storage', handleStorage);

});
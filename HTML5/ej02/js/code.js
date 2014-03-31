
$(function(){
    document.designMode = 'on';
    $(document).on('click','#negrita',function(){
         document.execCommand('bold',false,null);
     });
    $(document).on('click','#cursiva',function(){
         document.execCommand('italic',false,null);
     });
    $(document).on('click','#underline',function(){
         document.execCommand('underline',false,null);
     });

});
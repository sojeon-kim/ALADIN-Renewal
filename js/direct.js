$(document).ready(function(){
    $('#slect_direct').hide();
    $('#slect_direct').css('width','100%')


    $('#selecter').change(function(){
        if($('select').val() == 'direct'){
            $('#slect_direct').show();
            $('#slect_direct').focus();
            console.log('된다');
        }else{
            $('#slect_direct').hide();
            console.log('안된다');
        }
    })

    
});

$(document).ready(function(){
    // 이메일 직접입력 칸 선택 시 직접 입력칸 보여주는 스크립트, 다른 옵션을 선택 하면 직접 입력칸 사라짐.
    $('#slect_direct').hide();
    $('#slect_direct').css('width','100%')


    $('#selecter').change(function(){
        if($('select').val() == 'direct'){
            $('#slect_direct').show();
            $('#slect_direct').focus();
        }else{
            $('#slect_direct').hide();
        }
    })

    // 약관 동의 버튼 체크 & 체크 해제 스크립트
    $(".check_list").click(function(){
        $(this).toggleClass("checked");
    })
    
});

// 로그인 시 아이디, 비밀번호 입력 하지 않으면 뜨는 알람
window.onload = function(){
    var login = document.login;
    login.id.focus();

    login.onsubmit = function(){
        if(!login.id.value){
            login.id.focus();
            $(".id_alert").css("display","block");
            if(!login.pw.value){
                login.pw.focus();
                $(".pw_alert").css("display","block");
                return false;
            }else{
                $(".pw_alert").css("display","none");
            }
            return false;
        }else{
            $(".id_alert").css("display","none");
        }


        if(!login.pw.value){
            login.pw.focus();
            $(".pw_alert").css("display","block");
            return false;
        }else{
            $(".pw_alert").css("display","none");
        }
     
    }
}
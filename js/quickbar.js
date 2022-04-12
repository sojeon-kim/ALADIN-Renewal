// 퀵메뉴
$(document).ready(function(){
   
    // 퀵메뉴 스크롤시 위치 변경 스크립트
    $(document).scroll(function(){
        var top = $(document).scrollTop();
        
        if(top > $("header").outerHeight()){
            $(".quickmenu").addClass("on");
        }else{
            $(".quickmenu").removeClass("on");
        }
    });

    // 맨 위로 버튼
    $(".top").click(function(){
        $(window).scrollTop(0);
    });
    // 맨 아래로 버튼
    $(".down").click(function(){
        $(window).scrollTop($(document).height());
    });

    // 최근에 본 제품 버튼
    // hide = 1, show = 0
    var hide = false;

    $('.cart').click(function(event){
        if(!hide){
            hide = true;
            $(".cart+ol").css("display", "block");
        }else{
            $(".cart+ol").css("display", "none");
            hide = false;
        }

        event.stopPropagation(); //부모 이벤트 막아줌
    })

    $("html").click(function(){
        $(".cart+ol").css("display", "none");
        hide = false;
    });

    // 최근에 본 제품 박스 화면 사이즈에 따라 박스 크기 변경 스크립트
   $(window).resize(function(event){
        if($(window).width() <= 540){
            $(".cart+ol").css("width", "150px");
        }else if($(window).width() > 540){
            $(".cart+ol").css("width", "363px");
        }
  
   });
        
  
});
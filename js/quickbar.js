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
    $(".top").click(function(event){
        $(window).scrollTop(0);
        event.preventDefault();
    });
    // 맨 아래로 버튼
    $(".down").click(function(event){
        $(window).scrollTop($(document).height());
        event.preventDefault();
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
        event.preventDefault(); //a의 동작 막아줌
    })

    $("html").click(function(){
        $(".cart+ol").css("display", "none");
        hide = false;
    });

    // 최근에 본 제품 박스 화면 사이즈에 따라 박스 크기 변경 스크립트
   $(window).resize(function(){
        if($(window).width() <= 540){
            $(".cart+ol").css("width", "150px");
        }else if($(window).width() > 540){
            $(".cart+ol").css("width", "363px");
        }
  
   });
        
  
});
$(document).ready(function(){
    // 푸터 메뉴 아코디언 스크립트
    $(".aside_area .m").click(function(){
        $(this).toggleClass("on");
        $(this).next().toggleClass("on");

        // 동등한 레벨의 메뉴를 클릭 했을 때 열려진 메뉴가 닫힘
        $(this).parent().css("border-bottom", "0").siblings().children('.m').removeClass('on');
        $(this).parent().siblings().children('ul').removeClass('on');  
    });
});
$(document).ready(function(){
    // 1024px 이하일 때 클릭하면 nav가 내려오는 스크립트
    $('nav .main_manu > li> a').click(function(){
        // 클릭한 메뉴의 하위 메뉴 열기
        $(this).siblings().slideToggle().parent().toggleClass('click');

        // 하나의 메뉴가 열린 채 다른 메뉴를 누르면 닫힘
        $(this).parent().siblings().children('.sub_menu').slideUp().parent().removeClass('click');

    });

    // 햄버거 버튼
    $('.hamburger_btn').click(function(){
        $('header').toggleClass('on');
        $('nav').toggleClass('on');
        $(this).toggleClass('on');
    });

    // nav menu
    $('nav .main_manu > li:hover > a').click(function(){
        $(this).toggleClass('on');
        $(this).next().toggleClass('on');

        $(this).parent().css('border-bottom', '0').siblings().children('.m').removeClass('on');
        $(this).parent().siblings().children('ul').removeClass('on');
    });

});

// 스크롤 시 헤더 고정 스크립트
// 스크롤이 내려가 있는 경우 새로 고침 해도 헤더 고정 된 상태 유지
$(document).on('ready scroll',function(){
    var top = $(document).scrollTop();

    if(top > $('header').outerHeight()){
        $('header').addClass('scroll');
    }else{
        $('header').removeClass('scroll');
    };
});
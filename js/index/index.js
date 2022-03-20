// 메인비주얼 책 표지 보이도록 하는 스크립트

var swiper = new Swiper(".mv_list .mySwiper", {
    spaceBetween: 15,
    pagination: {
        el: ".mv_list .swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        321:{
            slidesPerView: 1.8,
        },
        413: {
            slidesPerView: 2.5,
        },
        761: {
            slidesPerView: 3.5,
        },
        1291: {
            slidesPerView: 4,
        },
    }
});

// 메인비주얼 하단 버튼 스크립트
var mvBtnmobile = undefined;
function mvSwiper(){
    if($(window).width() <= 665 && mvBtnmobile == undefined){
        mvBtnmobile = new Swiper("#mv_btn .mySwiper",{
            slidesPerView: 3,
        });
    }else if ($(window).width() > 665 && mvBtnmobile !== undefined){
        mvBtnmobile.destroy();
        mvBtnmobile = undefined;
        $("#mv_btn .mySwiper").removeAttr("style");
        $("#mv_btn .swiper-wrapper").removeAttr("style");
        $("#mv_btn .swiper-slide").removeAttr("style");         
    }
}

mvSwiper();

$(window).on("resize", function(){
    mvSwiper();        
});

// 화제의 책 소식 스크립트
var swiper = new Swiper("#book_news  .mySwiper", {

    centeredSlides: true,
    navigation: {
        nextEl: "#book_news .swiper-button-next",
        prevEl: "#book_news .swiper-button-prev",
    },
    breakpoints: {
        320:{
            slidesPerView: 1.2,
            spaceBetween: 18,
        },
        761:{
            slidesPerView: 2,
            spaceBetween: -80,
        },
        1025:{
            slidesPerView: 1.2,
            spaceBetween: 80,
        },
        1291:{
            slidesPerView: 1.5,
            spaceBetween: 0,
        },
    },
    // autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false,
    // },
});

// 추천 책 스크립트
var swiper = new Swiper("#recom_book  .mySwiper", {
    // slidesPerView: 5,
    spaceBetween: 20,
    navigation: {
        nextEl: "#recom_book .swiper-button-next",
        prevEl: "#recom_book .swiper-button-prev",
    },
    pagination: {
        el: "#recom_book .swiper-pagination",
    },
    breakpoints: {
        320:{
            slidesPerView: 2.3,
        },
        413:{
            slidesPerView: 3,
        },
        666:{
            slidesPerView: 4,
        },
        1025:{
            slidesPerView: 5,
        }
    },
});

// 1월의 알라딘
var eventMobile = undefined;
function eventSwiper(){
    if($(window).width() <= 350 && eventMobile == undefined){
        eventMobile = new Swiper("#event .mySwiper",{
            slidesPerView: 3.5,
            spaceBetween: 25,
        });
    }
    else if($(window).width() <= 399 && eventMobile == undefined){
        eventMobile = new Swiper("#event .mySwiper",{
            slidesPerView: 4,
            spaceBetween: 25,
        });
    }else if ($(window).width() > 399 && eventMobile !== undefined){
        eventMobile.destroy();
        eventMobile = undefined;
        $("#event .mySwiper").removeAttr("style");
        $("#event .swiper-wrapper").removeAttr("style");
        $("#event .swiper-slide").removeAttr("style");         
    } 
}

eventSwiper();

$(window).on("resize", function(){
    eventSwiper();        
});
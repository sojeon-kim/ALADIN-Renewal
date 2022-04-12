// 메인비주얼 섹션 : 화면 사이즈에 따라  책 표지 보이는 갯수 변경하는 스크립트
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
    },
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
});

// 메인비주얼 하단 버튼 섹션 : 기존 버튼 형태에서 665px에서 슬라이드 형태로 변경하는 스크립트
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

$(window).on("resize", function(){
    mvSwiper();        
});

// 화제의 책 소식 섹션 : 화면 크기에 따라 책 보이는 갯수 변경 및 보이는 형태 변경하는 스크립트
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
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
});

// 추천 책  섹션 : 화면 사이즈에 따라 보이는 책 갯수 변경하는 스크립트
var swiper = new Swiper("#recom_book  .mySwiper", {
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


// 주간 BEST TOP 10 섹션 : 화면 크기에 따라 섹션 타이틀 값을 변경하는 스크립트
$(window).on("resize", function(){
    
    var top10 = document.getElementById('top10');
    var sectionTitle = top10.children[0].children[0];

    if($(window).width() <= 760){
        sectionTitle.innerText = '주간 베스트';
    }else if($(window).width() > 760){
        sectionTitle.innerText = '주간 BEST TOP 10';
    };    
});



// 1월의 알라딘 섹션 : 기존 버튼 형태에서 412px에서 슬라이드 형태로 변경하는 스크립트
// 인터넷 슬라이더 두께 17px이기 때문에 412-17=395로 범위 지정
var eventMobile = undefined;
function eventSwiper(){
    if($(window).width() <= 395 && eventMobile == undefined){
        eventMobile = new Swiper("#event .mySwiper",{
            breakpoints: {
                320:{
                    slidesPerView: 3.5,
                    spaceBetween: 10,
                },
                395:{
                    slidesPerView: 4,
                    spaceBetween: 20,
                }
            },
        });
    }else if ($(window).width() > 395 && eventMobile !== undefined){
        eventMobile.destroy();
        eventMobile = undefined;
        $("#event .mySwiper").removeAttr("style");
        $("#event .swiper-wrapper").removeAttr("style");
        $("#event .swiper-slide").removeAttr("style");         
    } 
}

$(window).on("resize", function(){
    eventSwiper();        
});




    

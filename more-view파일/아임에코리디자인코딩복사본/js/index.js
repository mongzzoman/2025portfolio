$(document).ready(function(){
  // 모바일 햄버거 클릭하면 모바일메뉴가 나오도록
  $('header .mb-header .hamburger-menu').click(function(){
    $('header .hamburger-popup').addClass('active');
  });
  $('header .hamburger-popup .popup-wrapper .exit, header .hamburger-popup .dim').click(function(){
    $('header .hamburger-popup').removeClass('active');
  });

  // go top button
  $(window).scroll(function () {
    if ($(this).scrollTop() >= 400) {
      $(".gotop").fadeIn();
    } else {
      $(".gotop").fadeOut();
    }
  });
  $(".gotop").click(function (e) {
    e.preventDefault();
    $("html, body").stop().animate(
      {
        scrollTop: 0,
      },
      500
    );
  }); 
  
// 화면 스크롤 시작 시 헤더 컬러 변경

  $(window).scroll(function(){
    if ($(this).scrollTop() >= 50) {
      $("header").addClass('scroll');
      $("header .mb-header .logo p").addClass('scroll');
      $("header .mb-header .hamburger-menu span").addClass('scroll');
      $("header .mb-header .cart").addClass('scroll');
      $("header .pc-header nav").addClass('scroll');
      $("header .pc-header .top a.logo p").addClass('scroll');
      $("header .pc-header .top .util a").addClass('scroll');
      $("header .pc-header .top .util .search input").addClass('scroll');
    }
    else {
      $("header").removeClass('scroll');
      $("header .mb-header .logo p").removeClass('scroll');
      $("header .mb-header .hamburger-menu span").removeClass('scroll');
      $("header .mb-header .cart").removeClass('scroll');
      $("header .pc-header nav").removeClass('scroll');
      $("header .pc-header .top a.logo p").removeClass('scroll');
      $("header .pc-header .top .util a").removeClass('scroll');
      $("header .pc-header .top .util .search input").removeClass('scroll');
    }
  });
    
  
  const mainBanner = new Swiper(".main-banner-swiper", {
    // cssMode: true,
    // centeredSlides: true,
    loop: true,
    loopedSlides: 3,
    keyboard: true,
    autoplay: {
      delay: 6000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".mainswiper-button-next",
      prevEl: ".mainswiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });
  
  // gpt도움으로 자정까지 남은 시간 타이머 재설정
  function remaindTime() {
  var now = new Date(); // 현재 시각
  // 오늘 자정(밤 12시)은 사실 내일 0시이므로 +1일로 설정해야 함
  var end = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 0); 

  var diff = end.getTime() - now.getTime(); // 남은 밀리초
  var sec = parseInt(diff / 1000); // 초 단위로 변환

  // 남은 시간이 음수가 되지 않도록 방어
  if (sec < 0) sec = 0;

  var hour = parseInt(sec / 3600);
  sec %= 3600;
  var min = parseInt(sec / 60);
  sec %= 60;

  // 한 자리 수일 때 앞에 0 붙이기
  if (hour < 10) hour = "0" + hour;
  if (min < 10) min = "0" + min;
  if (sec < 10) sec = "0" + sec;

  // 화면에 출력
  $(".hours").html(hour);
  $(".minutes").html(min);
  $(".seconds").html(sec);
}
  
  // 1초마다 반복 실행
  setInterval(remaindTime, 1000);
  remaindTime(); // 페이지 로드 시 즉시 한 번 실행


  // MD추천 탭 메뉴
  $('.md-recommend .product-box .title-list .tab li a').click(function(e){
    e.preventDefault();
    $('.md-recommend .product-box .title-list .tab li a').removeClass('active');
    $(this).addClass('active');

    var idx = $(this).parent('li').index();

    $('.md-recommend .list-box').removeClass('active');
    $('.md-recommend .list-box').eq(idx).addClass('active');

    // .eq(0).find('a').trigger('active')
  });








  const ecoSwiper = new Swiper(".ecoSwiper", {
    slidesPerView: 4,
    autoplay : true,
    loop : true,
    speed : 1000,
    spaceBetween: 16,
    observer: true,
    observeParents: true,
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
    },
    navigation: {
        nextEl: ".ecoswiper-button-next",
        prevEl: ".ecoswiper-button-prev",
      },
  });
  
  
  
  
  
  
  
  const eventSwiper = new Swiper(".event-swiper", {
  // slidesPerView: 1,
  // centeredSlides: true,
  // spaceBetween: 6,
  loop: true,
  loopedSlides: 3,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".event-swiper .swiper-pagination",
    type: "fraction",
    clickable: true,
  },
}); 
})










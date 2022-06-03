//header add class fixed
$(function () {
  let header = document.querySelector("#header");
  let headerHeight = header.offsetHeight;

  window.onscroll = function () {
    let windowTop = window.scrollY;
    if (windowTop >= headerHeight) {
      header.classList.add("fixed");
    } else {
      header.classList.remove("fixed");
    }
  };
});





//nav 스크롤 인식
(function($){
  $(window).on("load",function(){
    $(".snb a,a[href='#top'],a[rel='m_PageScroll2id']").mPageScroll2id({
      highlightSelector:".snb a"
    });

    $("a[rel='next']").click(function(e){
      e.preventDefault();
      var to=$(this).parent().parent("section").next().attr("id");
      $.mPageScroll2id("scrollTo",to);
    });

    $(window).scroll(function() {
      var s = $(window).scrollTop();	// 현재 window scrollTop
      var intro = document.querySelector("#Introduction").offsetTop;
      var mainch = document.querySelector("#DigitalRebirthEvents").offsetTop;
      var nfts = document.querySelector("#NFTs").offsetTop;
      // var roadmap = document.querySelector("#Roadmap").offsetTop;
      // var team = document.querySelector("#Team").offsetTop;
      console.log("s = " + s);

      if(s < intro){
        $('#header, #sidebar, #navbarCollapse, #navbarToggler').removeClass('on');
      }
      else if( s < mainch ){
        $('#header, #sidebar, #navbarCollapse, #navbarToggler').addClass('on');
      }
      else if( s < nfts ){
        $('#header, #sidebar, #navbarCollapse, #navbarToggler').removeClass('on');
      }
      // else if( s < roadmap ){
      //   $('#header, #sidebar, #navbarCollapse, #navbarToggler').addClass('on');
      // }
      // else if (s < team ){
      //   $('#header, #sidebar, #navbarCollapse, #navbarToggler').removeClass('on');
      // }
      else{
        $('#header, #sidebar, #navbarCollapse, #navbarToggler').addClass('on');
      };

     });
  });
})(jQuery);
// (function($){
//   $(window).on("load",function(){
//     $(".snb a,a[href='#top'],a[rel='m_PageScroll2id']").mPageScroll2id({
//       highlightSelector:".snb a"
//     });
//
//     $("a[rel='next']").click(function(e){
//       e.preventDefault();
//       var to=$(this).parent().parent("section").next().attr("id");
//       $.mPageScroll2id("scrollTo",to);
//     });
//   });
// })(jQuery);


$(function () {
  $(".snb>ol>li>a").click(function () {
    $("html, body").animate(
      {
        scrollTop: $($.attr(this, "href")).offset().top,
      },
      500
    );
    return false;
  });
});


//FAQ Accordion
$(".que").click(function () {
  if ($(this).next(".anw").is(":visible")) {
    $(this).next(".anw").stop().slideUp(300);
  } else {
    $(".anw").stop().slideUp(300);
    $(this).next(".anw").stop().slideDown(300);
  }
});

window.counter = function () {
  // this refers to the html element with the data-scroll-showCallback tag
  var span = this.querySelector("span");
  var current = parseInt(span.textContent);

  span.textContent = current + 1;
};


//ScrollTrigger
document.addEventListener("DOMContentLoaded", function () {
  var trigger = new ScrollTrigger({
    addHeight: true,
  });
});



//Introduction 이미지 슬라이드
$(function () {
  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 10,
    // slidesPerView : 1,
    centeredSlides: true,
    breakpoints : { // 반응형 설정이 가능 width값으로 조정
      410 : {
        slidesPerView : 'auto',
      },
    },
    loop:true,
    // centeredSlides: true,
    speed:3000,
    autoplay: {
      delay: 500,
      disableOnInteraction: false,
    },
  });

});


//home text typing
$(document).ready(function(){
  var typing = document.getElementById('typing');
  var typewriter = new Typewriter(typing, {
      loop: true
  });

  typewriter.typeString('Metaverse')
      .pauseFor(2500)
      .deleteAll()
      .start();
});


//Main Characters Masonry
$(document).ready(function(){
  var msnry = new Masonry( '#masonry', {
    itemSelector: '#masonry li',
    // columnWidth: 200
    columnWidth: '.grid-sizer',
    percentPosition: true,
    gutter : 0,
    });
    imagesLoaded( '#masonry' ).on( 'progress', function() {
    msnry.layout();
  });
});

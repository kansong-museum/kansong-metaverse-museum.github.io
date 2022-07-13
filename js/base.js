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

//ScrollTrigger
// document.addEventListener("DOMContentLoaded", function () {
//   var trigger = new ScrollTrigger({
//     addHeight: true,
//   });
// });

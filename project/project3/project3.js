$(".sss").on("click", () => {
  $(".toggle").toggleClass("t-to");
  $(".toggle ul").toggleClass("to-opacitiy");
  $(".toggle .sns-logo").toggleClass("to-opacitiy");
});
// $(".sss").on("click", () => {
//   $(".to-wrapper").toggleClass("to-w");
// });
//

// 오퍼시티넣기
$(".sss").on("click", () => {
  $(".sss span:nth-of-type(1)").toggleClass("sp-1");
  $(".sss span:nth-of-type(2)").toggleClass("sp-2");
  $(".sss span:nth-of-type(3)").toggleClass("sp-3");
  $(".sss div").toggleClass("one");
});
// ****************************************
// .m-bx
const movingImg = (evt) => {
  let x = evt.clientX;
  let y = evt.clientY;

  $(".bx1 .cap").css({ left: -x / 100, top: 20 - y / 20 });
  $(".bx2 .cap").css({ left: -x / 100, top: 20 - y / 20 });
  $(".bx3 .cap").css({ left: -x / 100, top: 20 - y / 20 });

  requestAnimationFrame(movingImg);
};

$(".txt-bx").on("mousemove", movingImg);
//
let prevScroll = window.scrollY;
console.log(prevScroll);
$(window).on("scroll", () => {
  let currentScroll = window.scrollY;
  console.log("currentScroll: ", currentScroll);
  console.log("1 prevScroll: ", prevScroll);

  if (prevScroll > currentScroll) {
    $(".header").css({ marginTop: 0 });
  } else {
    $(".header").css({ marginTop: -105 });
  }

  prevScroll = currentScroll;
  console.log("2 prevScroll: ", prevScroll);
});

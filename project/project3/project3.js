$(".sss").on("click", () => {
  $(".toggle").toggleClass("t-to");
  $(".toggle ul").toggleClass("to-opacitiy");
  $(".toggle .sns-logo").toggleClass("to-opacitiy");
});
$(".sss").on("click", () => {
  $(".to-wrapper").toggleClass("to-w");
});
//
$("#t-btn").on("click", () => {
  $(".header p svg").toggleClass("t-btn-c");
});
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

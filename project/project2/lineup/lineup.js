// sy 마우스 휠 내려가기
$(".box").each(function () {
  // 휠 올리고 내리는거 제어하려고 html에 헤더부터 푸터까지 전부 .box라는 이름 붙임
  $(this).on("wheel", function (evt) {
    evt.preventDefault(); // 휠 기본속성 제거??

    let delta = evt.originalEvent.deltaY;
    let currentTop = null;

    const nextBox = this.nextElementSibling;
    const prevBox = this.previousElementSibling;

    if (delta > 0) {
      if (nextBox) {
        currentTop = nextBox.offsetTop;
        // console.log("down", currentTop);
      } else {
        // return;
        currentTop = this.offsetTop;
      }
    } else {
      // 휠을 올렸을 때
      if (prevBox) {
        currentTop = prevBox.offsetTop;
      } else {
        // return;
        currentTop = 0;
      }
    }

    scrollTo({
      top: currentTop,
      behavior: "smooth",
    });
  });
});
$(".upto").click(function () {
  $("html, body").animate({ scrollTop: 0 }, 400);
  return false;
});
// 인터넷 긁어온거
var header = document.querySelector("header");
var headerMoving = function (direction) {
  if (direction === "up") {
    header.className = "";
  } else if (direction === "down") {
    header.className = "scrollDown";
  }
};
var prevScrollTop = 0;
document.addEventListener("scroll", function () {
  var nextScrollTop = window.pageYOffset || 0; // pageYOffset -> IE 8 이하 빼고 다 됨.
  if (nextScrollTop > prevScrollTop) {
    headerMoving("down");
  } else if (nextScrollTop < prevScrollTop) {
    headerMoving("up");
  }
  prevScrollTop = nextScrollTop;
});

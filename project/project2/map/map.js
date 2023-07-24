// sy 마우스 휠 내려가기
$(".upto").click(function () {
  $("html, body").animate({ scrollTop: 0 }, 400);
  return false;
});

$(".section1 img").each(function () {
  $(this).on("wheel", function (evt) {
    evt.preventDefault(); // 휠 기본속성 제거

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

// jh 스크롤은 내리면 영상이 커지는 이벤트

$(window).scroll(function () {
  const scroll = $(window).scrollTop();
  $("#mov01").css({
    width: 100 + scroll / 18 + "%",
  });
});

// jh 영역 도착시, 밑줄 발생
$(window).on("scroll", () => {
  const underHt = $("h3").offset().top - 500;

  if (scrollY > underHt) {
    $("h3").addClass("under");
  } else {
    $("h3").removeClass("under");
  }
});

// jh 섹션영역1에서 마우스 움직임 발생시 banner-box 이미지 움직임
const movingImg = (evt) => {
  let x = evt.clientX;
  let y = evt.clientY;

  $("#banner-title").css({ left: 20 - x / 60, bottom: 20 - y / 30 });

  requestAnimationFrame(movingImg);
};

$(".banner-wrapper").on("mousemove", movingImg);

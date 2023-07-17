// 버튼 클릭시 최상단으로
$(".f-btn").on("click", (e) => {
  e.preventDefault();
  $(".posi-3").addClass("none");
  scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
//

$(window).on("scroll", () => {
  const moon1 = $(".project:nth-of-type(3)").offset().top;
  console.log(moon1);
  const moon2 = $(".project:nth-of-type(3)").offset().top;
  console.log(moon2);
  const moon3 = $(".topjs").offset().top;
  console.log(moon3);

  if (scrollY > moon1) {
    $(".moon-1").addClass("active1");
  } else {
    $(".moon-1").removeClass("active1");
  }

  if (scrollY >= moon2) {
    $(".moon-2").addClass("active2-1");
  } else {
    $(".moon-2").removeClass("active2-1");
  }

  if (scrollY >= moon3) {
    $(".moon-2").addClass("active2-2");
  } else {
    $(".moon-2").removeClass("active2-2");
  }

  if (scrollY >= moon3) {
    $(".moon-3").addClass("active2-3");
  } else {
    $(".moon-3").removeClass("active2-3");
  }

  // const moon4 = $(".project:nth-of-type(2)").offset().top;
  // console.log(moon4);
  let skill1 = $(".skill1").offset().top;
  // console.log(scrollY);// 스크롤 값
  console.log(".skill1"); // body 시작에서부터의 거리
  console.log($(".skill1").height()); // footer의 높이
  console.log(document.documentElement.clientHeight); // 화면의 크기

  // let result =
  //   footerHeight -
  //   $(".skill1").height() -
  //   document.documentElement.clientHeight;

  // if (scrollY > result) {
  //   $('.banner').addClass('on');
  // } else {
  //   $('.banner').removeClass('on');
  // }
});

//
$(".sun").delay(1).animate({ marginTop: -200 }, 1500);
$(".sun-light").delay(1).animate({ marginTop: -260 }, 1500);
$(".rock-bg1").delay(50).animate({ paddingBottom: 50 }, 1500);
$(".rock-bg2").delay(200).animate({ paddingBottom: 55 }, 1500);
// $(".rock-bg2").delay(1).animate({ marginTop: -200 }, 1500);

//
$(window).on("scroll", () => {
  const mor = $(".morning").offset().top;
  console.log(mor);

  // if (scrollY > moon1) {
  //   $(".moon-1").addClass("active1");
  // } else {
  //   $(".moon-1").removeClass("active1");
  // }
});

$(".morning p").on("click", () => {
  $(".mor-1").delay(100).addClass("none");
  $(".mor-2").delay(110).removeClass("none");
  $(".mor-2").delay(1500).addClass("none");
  $(".mor-3").delay(1500).removeClass("none");
  $(".mor-3").delay(4500).addClass("none");
  $(".mor-4").delay(4500).removeClass("none");
});

let prevScroll = window.scrollY;
console.log(prevScroll);

$(window).on("scroll", () => {
  let currentScroll = window.scrollY;
  console.log("currentScroll: ", currentScroll);
  console.log("1 prevScroll: ", prevScroll);

  if (prevScroll > currentScroll) {
    $("header").css({ top: 0 }, 200);
  } else {
    $("header").css({ top: -64 }, 200);
  }

  prevScroll = currentScroll;
  console.log("2 prevScroll: ", prevScroll);
});

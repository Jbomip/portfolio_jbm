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
});

//
$(".sun").delay(1).animate({ marginTop: -200 }, 1500);
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

// addEventListener("mousemove", (evt) => {
//   let x = evt.clientX,
//     y = evt.clientY;
//   console.log(x, y);

//   $(".cloud1").css({ left: -700 + x / 60, top: y / 30 });
//   $(".cloud2").css({ right: -700 + x / 30, top: 100 + y / 30 });
// });
//
// @keyframes rock-bg1 {
//   0% {
//     transform: translateY(0);
//   }

//   100% {
//     transform: translateY(10%);
//   }
// }
$(".morning p").on("click", () => {
  // $('#box1').delay(1500).animate({ marginTop: 200, opacity: 1 }, 1000);
  // $('#box2').delay(1000).animate({ marginTop: 400, opacity: 1 }, 1000);
  // mor-1 mor-2 mor-3 mor-4
  $(".mor-1").delay(100).addClass("none");
  $(".mor-2").delay(110).removeClass("none");
  $(".mor-2").delay(1500).addClass("none");
  $(".mor-3").delay(1500).removeClass("none");
  $(".mor-3").delay(4500).addClass("none");
  $(".mor-4").delay(4500).removeClass("none");

  // $('#box3').delay(500).addClass(addClass("active1"));
  // $('#box3').delay(500).addClass(addClass("active1"));
});

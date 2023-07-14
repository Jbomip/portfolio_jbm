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

$(window).on("scroll", () => {
  const headerhide = $(".bx1").offset().top;
  if (scrollY > headerhide) {
    $("header").addClass("none");
  } else {
    $("header").removeClass("none");
  }
  console.log(scrollY);
  console.log(headerhide);
});

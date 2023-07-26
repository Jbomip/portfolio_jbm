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

//
$("#pro").on("click", (evt) => {
  evt.preventDefault();

  const project = $(".bx1").offset().top;

  scrollTo({
    top: project,
    behavior: "smooth",
  });
});
$("#con").on("click", (evt) => {
  evt.preventDefault();

  const project = $("footer").offset().top;

  scrollTo({
    top: project,
    behavior: "smooth",
  });
});

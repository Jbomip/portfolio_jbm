// 버튼 클릭시 최상단으로
$(".upto").on("click", (e) => {
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
  // let morJs = $(".mor-js").offset().top;
  // console.log(scrollY);// 스크롤 값
  // console.log(".mor-js"); // body 시작에서부터의 거리
  // console.log($(".mor-js").height()); // footer의 높이
  // console.log(document.documentElement.clientHeight); // 화면의 크기

  // let result =
  //   footerHeight -
  //   $(".mor-js").height() -
  //   document.documentElement.clientHeight;

  // if (scrollY > result) {
  //   $('.mor-2').addClass('on');
  // } else {
  //   $('.mor-2').removeClass('on');
  // }
});

//
$(".sun").delay(1).animate({ marginTop: -200 }, 1500);
$(".sun-light").delay(1).animate({ marginTop: -260 }, 1500);
$(".rock-bg1").delay(50).animate({ paddingBottom: 50 }, 1500);
$(".rock-bg2").delay(200).animate({ paddingBottom: 55 }, 1500);
//

$(".mor-ship").on("click", () => {
  $(".mor-2").delay(600).animate({ opacity: 1 }, 100);
  $(".mor-3").delay(900).animate({ opacity: 1 }, 100);
  $(".mor-4").delay(1200).animate({ opacity: 1 }, 100);
  console.log("클릭함");
  $(".mor-sun").delay(250).animate({ top: 450, left: 800 }, 1300);
  $(".mor-ship").removeClass("ship-ani");
});

//
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
//
$(window).on("scroll", () => {
  const intro1 = $(".topjs").offset().top;
  console.log(intro1);

  if (scrollY > intro1) {
    $(".p-1").addClass("none");
    $(".p-2").removeClass("none");
  } else {
    $(".p-1").removeClass("none");
    $(".p-2").addClass("none");
  }
});
$(window).on("scroll", () => {
  const upto = $(".pro-1").offset().top;
  console.log(upto);

  if (scrollY > upto) {
    $(".upto").addClass("upto-add");
  } else {
    $(".upto").removeClass("upto-add");
  }
});

gsap.from(".trigger1 h3", {
  scrollTrigger: {
    trigger: ".trigger1",
    start: "top 600px",
    end: "top 300px",
    // markers: true,
    scrub: true,
    // pin: true,
  },
  opacity: 0,
  x: -150,
});
gsap.from(".trigger1 ul", {
  scrollTrigger: {
    trigger: ".trigger1",
    start: "top 600px",
    end: "top 300px",
    // markers: true,
    scrub: true,
    // pin: true,
  },
  opacity: 0,
  x: 150,
});

gsap.from(".trigger2 h3", {
  scrollTrigger: {
    trigger: ".trigger2",
    start: "top 600px",
    end: "top 300px",
    // markers: true,
    scrub: true,
    // pin: true,
  },
  opacity: 0,
  x: -150,
});
gsap.from(".trigger2 ul", {
  scrollTrigger: {
    trigger: ".trigger2",
    start: "top 600px",
    end: "top 300px",
    // markers: true,
    scrub: true,
    // pin: true,
  },
  opacity: 0,
  x: 150,
});

gsap.from(".trigger3 h3", {
  scrollTrigger: {
    trigger: ".trigger3",
    start: "top 600px",
    end: "top 300px",
    // markers: true,
    scrub: true,
    // pin: true,
  },
  opacity: 0,
  x: -150,
});
gsap.from(".trigger3 ul", {
  scrollTrigger: {
    trigger: ".trigger3",
    start: "top 600px",
    end: "top 300px",
    // markers: true,
    scrub: true,
    // pin: true,
  },
  opacity: 0,
  x: 150,
});

gsap.from(".trigger4 h3", {
  scrollTrigger: {
    trigger: ".trigger4",
    start: "top 600px",
    end: "top 400px",
    // markers: true,
    scrub: true,
    // pin: true,
  },
  opacity: 0,
  x: -150,
});
gsap.from(".trigger4 ul", {
  scrollTrigger: {
    trigger: ".trigger4",
    start: "top 600px",
    end: "top 400px",
    // markers: true,
    scrub: true,
    // pin: true,
  },
  opacity: 0,
  x: 150,
});
$("#pro").on("click", (evt) => {
  evt.preventDefault();

  const project = $("main").offset().top;

  scrollTo({
    top: project,
    behavior: "smooth",
  });
});
$("#skill").on("click", (evt) => {
  evt.preventDefault();

  const skill = $(".skill1").offset().top;

  scrollTo({
    top: skill,
    behavior: "smooth",
  });
});
$("#con").on("click", (evt) => {
  evt.preventDefault();

  const con = $(".mor-cloud").offset().top;
  const skillH = $(".skill").innerHeight();
  console.log(skillH);

  scrollTo({
    top: con,
    behavior: "smooth",
  });
});

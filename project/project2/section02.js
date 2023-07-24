const swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  spaceBetween: 30,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});

// ------------------------------------------------------- //


$('.slide-img1').on('click', () => {
  $(".pf-1").removeClass("none");
  $(".pf-1").addClass("active");
  $(".pf-2").removeClass("active");
  $(".pf-3").removeClass("active");
  $(".pf-4").removeClass("active");
  $(".pf-5").removeClass("active");
  $(".pf-6").removeClass("active");
  $(".pf-7").removeClass("active");
  $(".pf-8").removeClass("active");
  $(".pf-9").removeClass("active");
  $(".pf-10").removeClass("active");
  $(".pf-11").removeClass("active");
});
$('.slide-img2').on('click', () => {
  $(".pf-1").removeClass("active");
  $(".pf-1").addClass("none");
  $(".pf-2").addClass("active");
  $(".pf-3").removeClass("active");
  $(".pf-4").removeClass("active");
  $(".pf-5").removeClass("active");
  $(".pf-6").removeClass("active");
  $(".pf-7").removeClass("active");
  $(".pf-8").removeClass("active");
  $(".pf-9").removeClass("active");
  $(".pf-10").removeClass("active");
  $(".pf-11").removeClass("active");
});

$('.slide-img3').on('click', () => {
  $(".pf-1").removeClass("active");
  $(".pf-1").addClass("none");
  $(".pf-2").removeClass("active");
  $(".pf-3").addClass("active");
  $(".pf-4").removeClass("active");
  $(".pf-5").removeClass("active");
  $(".pf-6").removeClass("active");
  $(".pf-7").removeClass("active");
  $(".pf-8").removeClass("active");
  $(".pf-9").removeClass("active");
  $(".pf-10").removeClass("active");
  $(".pf-11").removeClass("active");
});

$('.slide-img4').on('click', () => {
  $(".pf-1").removeClass("active");
  $(".pf-1").addClass("none");
  $(".pf-2").removeClass("active");
  $(".pf-3").removeClass("active");
  $(".pf-4").addClass("active");
  $(".pf-5").removeClass("active");
  $(".pf-6").removeClass("active");
  $(".pf-7").removeClass("active");
  $(".pf-8").removeClass("active");
  $(".pf-9").removeClass("active");
  $(".pf-10").removeClass("active");
  $(".pf-11").removeClass("active");
});
$('.slide-img5').on('click', () => {
  $(".pf-1").removeClass("active");
  $(".pf-1").addClass("none");
  $(".pf-2").removeClass("active");
  $(".pf-3").removeClass("active");
  $(".pf-4").removeClass("active");
  $(".pf-5").addClass("active");
  $(".pf-6").removeClass("active");
  $(".pf-7").removeClass("active");
  $(".pf-8").removeClass("active");
  $(".pf-9").removeClass("active");
  $(".pf-10").removeClass("active");
  $(".pf-11").removeClass("active");
});
$('.slide-img6').on('click', () => {
  $(".pf-1").removeClass("active");
  $(".pf-1").addClass("none");
  $(".pf-2").removeClass("active");
  $(".pf-3").removeClass("active");
  $(".pf-4").removeClass("active");
  $(".pf-5").removeClass("active");
  $(".pf-6").addClass("active");
  $(".pf-7").removeClass("active");
  $(".pf-8").removeClass("active");
  $(".pf-9").removeClass("active");
  $(".pf-10").removeClass("active");
  $(".pf-11").removeClass("active");
});
$('.slide-img7').on('click', () => {
  $(".pf-1").removeClass("active");
  $(".pf-1").addClass("none");
  $(".pf-2").removeClass("active");
  $(".pf-3").removeClass("active");
  $(".pf-4").removeClass("active");
  $(".pf-5").removeClass("active");
  $(".pf-6").removeClass("active");
  $(".pf-7").addClass("active");
  $(".pf-8").removeClass("active");
  $(".pf-9").removeClass("active");
  $(".pf-10").removeClass("active");
  $(".pf-11").removeClass("active");
});
$('.slide-img8').on('click', () => {
  $(".pf-1").removeClass("active");
  $(".pf-1").addClass("none");
  $(".pf-2").removeClass("active");
  $(".pf-3").removeClass("active");
  $(".pf-4").removeClass("active");
  $(".pf-5").removeClass("active");
  $(".pf-6").removeClass("active");
  $(".pf-7").removeClass("active");
  $(".pf-8").addClass("active");
  $(".pf-9").removeClass("active");
  $(".pf-10").removeClass("active");
  $(".pf-11").removeClass("active");
});
$('.slide-img9').on('click', () => {
  $(".pf-1").removeClass("active");
  $(".pf-1").addClass("none");
  $(".pf-2").removeClass("active");
  $(".pf-3").removeClass("active");
  $(".pf-4").removeClass("active");
  $(".pf-5").removeClass("active");
  $(".pf-6").removeClass("active");
  $(".pf-7").removeClass("active");
  $(".pf-8").removeClass("active");
  $(".pf-9").addClass("active");
  $(".pf-10").removeClass("active");
  $(".pf-11").removeClass("active");
});
$('.slide-img10').on('click', () => {
  $(".pf-1").removeClass("active");
  $(".pf-1").addClass("none");
  $(".pf-2").removeClass("active");
  $(".pf-3").removeClass("active");
  $(".pf-4").removeClass("active");
  $(".pf-5").removeClass("active");
  $(".pf-6").removeClass("active");
  $(".pf-7").removeClass("active");
  $(".pf-8").removeClass("active");
  $(".pf-9").removeClass("active");
  $(".pf-10").addClass("active");
  $(".pf-11").removeClass("active");
});
$('.slide-img11').on('click', () => {
  $(".pf-1").removeClass("active");
  $(".pf-1").addClass("none");
  $(".pf-2").removeClass("active");
  $(".pf-3").removeClass("active");
  $(".pf-4").removeClass("active");
  $(".pf-5").removeClass("active");
  $(".pf-6").removeClass("active");
  $(".pf-7").removeClass("active");
  $(".pf-8").removeClass("active");
  $(".pf-9").removeClass("active");
  $(".pf-10").removeClass("active");
  $(".pf-11").addClass("active");
});



//  hk : 스크롤 이벤트 -----------

gsap.set('.box1',{scale: 1, y: -100});
gsap.registerPlugin(ScrollTrigger);
gsap.to(".box1", {
  scrollTrigger: {
    trigger:".box1", 
    start: "top center",
    // toggleActions: "restart none reverse none",
    scrub: 0.5,
    ease:'bounce'
},
scale: 0.8, y: -70, duration: 50, backgroundColor: "#555555"  })





gsap.registerPlugin(ScrollTrigger);
gsap.to(".box3", {
  scrollTrigger: {
    trigger:".box1", 
    start: "top",
    scrub: 1,
    ease:'bounce'
},
 y: 2000, duration: 2 })
 

 gsap.to(".box3", {
  immediateRender: false,
  scrollTrigger: {
    trigger:".box3", 
    start: "top - 200",
    scrub: 1,
    ease:'bounce'
},
opacity:0})
 
 

$('.slide-img-box').on('click', evt => {
  evt.preventDefault();

  // js: .offsetTop;
  const box1 = $('.bg-color').offset().top;

  scrollTo({
    top: box1,
    behavior: 'smooth'
  });
});







// 타이틀 움직임

const footerMovingImg = (evt) => {
  let x = evt.clientX;
  let y = evt.clientY;

  $('.s3-title').css({left:-50 - x /60, top:70 - y / 30});
  $('.date1').css({left:0 - x /30, top:0 - y / 70});
  $('.date2').css({left:2 - x /50, top:-5 - y / 50});

  requestAnimationFrame(footerMovingImg);
};
$('.footer-wrapper').on('mousemove', footerMovingImg);


// footer 스크롤이벤트

gsap.set('.footer-moving',{scale: 2, y: 100});
gsap.registerPlugin(ScrollTrigger);
gsap.to(".footer-moving", {
  scrollTrigger: {
    trigger:".footer-moving", 
    toggleActions: "restart none reverse none",
    scrub: 0.5

},
scale: 0.2, y: 0, duration: 3  })





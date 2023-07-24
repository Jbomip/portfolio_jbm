// jh 스크롤시 svg이벤트
// 상단플라워 이벤트
const flowerPath = document.querySelector('.flower path');
const path = flowerPath.getTotalLength();
console.log(path);

flowerPath.style.strokeDasharray = path;
flowerPath.style.strokeDashoffset = path;

let scrolled = () => {
  const windScrollTop = document.documentElement.scrollTop;
  const scrollHt = document.documentElement.scrollHeight;
  const clientHt = document.documentElement.clientHeight;

  let total = (windScrollTop / (scrollHt - clientHt)) * 4.5;

  let action = path * total;

  flowerPath.style.strokeDashoffset = path - action;
};

addEventListener('scroll', scrolled);

// jh 영역 도착시, 밑줄 발생
$(window).on('scroll', () => {
  let underHt = $('.evet-box1').offset().top - 500;

  if (scrollY > underHt) {
    $('.evet-box1').addClass('under');
  } else {
    $('.evet-box1').removeClass('under');
  }
});

$(window).on('scroll', () => {
  let underHt = $('.evet-box2').offset().top - 300;

  if (scrollY > underHt) {
    $('.evet-box2').addClass('under');
  } else {
    $('.evet-box2').removeClass('under');
  }
});

$(window).on('scroll', () => {
  let underHt = $('.evet-box3').offset().top - 300;

  if (scrollY > underHt) {
    $('.evet-box3').addClass('under');
  } else {
    $('.evet-box3').removeClass('under');
  }
});

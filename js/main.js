// input 돋보기
const searchEL = document.querySelector('.search');
const searchInputEl = searchEL.querySelector('input');

searchEL.addEventListener('click', function(){
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function(){
  searchEL.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
});

searchInputEl.addEventListener('blur', function(){
  searchEL.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
});


// badges 스크롤 변화
const badgeEL = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');

window.addEventListener('scroll', _.throttle(function(){      // _.throttle(함수, 시간)
  console.log(window.scrollY);
  if (window.scrollY > 500) {
    //배지 숨기기
    //badgeEL.style.display = 'none';
    //gsap.to(요소, 지속시간, 옵션);
    gsap.to(badgeEL, .3, {
      opacity: 0,
      display: 'none'   //opacity만하면 보이지만 않는 거지 그대로 있어서 클릭됨
    });
    // + TO-TOP버튼 보이기
    gsap.to(toTopEl, .2, {
      x: 0
    });
  } else {
    //배지 보이기
    //badgeEL.style.display = 'block';
    gsap.to(badgeEL, .3, {
      opacity: 1,
      display: 'block'
    });
     // + TO-TOP버튼 숨기기
     gsap.to(toTopEl, .2, {
       x: 100
     });
  }
}, 300));
// + TO_TOP 버튼 이동
toTopEl.addEventListener('click', function () {
  gsap.to(window, .5, {
    scrollTo: 0
  });
});


// VISUAL 애니매이션
const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function(fadeEl, index){
  //gsap.to(요소, 지속시간, 옵션);
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * .5, //순차적 0.5-1-1.5-2
    opacity: 1
  });
});


// NOTICE SWIPER
new Swiper('.notice-line .swiper-container', {
  direction: 'vertical',
  autoplay: true,       // 자동 재생
  loop: true            // 반복 재생
});

// PROMOTION SWIPER
new Swiper('.promotion .swiper-container', {
// direction: 'horizontal' 기본값이라 안써도 됨
  slidesPerView: 3,     // 한번에 보여줄 슬라이드 개수
  spaceBetween: 10,     // 슬라이드 사이 여백
  centeredSlides: true, // 1번 슬라이드가 가운데로 보이기
  loop: true,
  autoplay: {
    delay: 4000
  },

  pagination: {
    el: '.promotion .swiper-pagination', //페이지 번호 요소 선택자
    clickable: true       //사용자의 페이지 번호 요소 제어 가능 여부 (클릭이 가능한지)
  },

  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next'
  }
});

const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click', function(){
  isHidePromotion = !isHidePromotion  //true
  if (isHidePromotion) {
    //숨김 처리
    promotionEl.classList.add('hide');
  } else {
    //보임 처리
    promotionEl.classList.remove('hide');
  }
});


// AWARDS SWIPER
new Swiper('.awards .swiper-container', {
  // direction: 'horizontal' 기본값이라 안써도 됨
  autoplay: true,
  loop: true,
  spaceBetween: 30,     //사이의 간격
  slidesPerView: 5,       //한 슬라이드에 몇 개가 보이게 할 건지
  // 앞뒤 버튼
  navigation: {
    prevEl: '.awards .swiper-prev',
    nextEl: '.awards .swiper-next'
  }
});



// 둥둥 뜨는 동그라미
function random(min, max) {
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}
function floatingObject(selector, delay, size) {
  gsap.to(selector, random(1.5, 2.5), {
    y: size,       // y축
    repeat: -1,   // 무한 반복(gsap라이브러리에선 -1이 무한임)
    yoyo: true,   //요요 다시 돌아가는
    ease: Power1.easeInOut,
    delay: random(0, delay)
  });
}
floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);


// SCROLL MAGIC
const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function (spyEl) {
  new ScrollMagic
    .Scene({
      triggerElement: spyEl,  //보여짐 여부를 감시할 요소를 지정
      triggerHook: .8         //뷰포트 높이가 0부터 1이라고 쳤을 때 0.8쯤에서 감시됨
    })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller());
});


// FOOTER 올해 년도 자동 계산
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();
//getFullYear로 올해 년도 2021날짜가 '.this-year'의 text로 나옴.
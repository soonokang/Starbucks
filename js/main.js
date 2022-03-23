// // 뱃지 제어
// const bedgeEl = document.querySelector('header .badges');

// window.addEventListener('scroll',
//     _.throttle(function(){
//         if(window.scrollY > 500){
//             // bedgeEl.style.display = 'none';
//             // gsap문법 => gsap.to(요소, 지속시간(초단위), 옵션)
//             gsap.to(bedgeEl,0.6,{
//                 opacity : 0,
//                 display : 'none',
//             });
//             // 상단으로 스크롤 버튼 보이기!
//         }else{
//             // bedgeEl.style.display = 'block';
//             gsap.to(bedgeEl,0.6,{
//                 opacity : 1,
//                 display : 'block',
//             })
//         }
//     },300)
// );

// main visual 순차적 등장
const fadeEl = document.querySelectorAll(".visual .fade-in");
fadeEl.forEach(function (fadeEl, index) {
  // gsap문법 => gsap.to(요소, 지속시간(초단위), 옵션)
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * 0.3, //0.7 ,1.4, 2.1, 2.8
    opacity: 1,
  });
});

// 공지사항
new Swiper(".notice-line .swiper", {
  // Optional parameters
  direction: "vertical",
  loop: true,
  autoplay: true,
});

//   promotion
new Swiper(".promotion .swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  autoplay: {
    delay: 2000,
  },
  pagination: {
    el: ".promotion .swiper-pagination",
    clickable: true,
  },
  navigation: {
    prevEl: ".promotion .swiper-prev",
    nextEl: ".promotion .swiper-next",
  },
  slidesPerView: 3, //한번에 보여줄 슬라이드 개수
  spaceBetween: 10, //슬라이드 사이 여백
  centeredSlides: true, //1번 슬라이드가 가운데 보이기
});

//   promotion toggle
const promotionEl = document.querySelector(".promotion"); //슬라이드 영역 요소
const promotionToggleBtn = document.querySelector(".toggle-promotion"); //슬라이드 영역을 토글할 버튼 검색

// 슬라이드 영역 숨김여부에 관한 기본값 설정
let isHidePromotion = false;

// 토글버튼을 클릭하면
promotionToggleBtn.addEventListener("click", function () {
  //슬라이드 영역 숨김 여부
  isHidePromotion = !isHidePromotion;
  if (isHidePromotion) {
    promotionEl.classList.add("show");
    promotionToggleBtn.classList.add("rotate");
  } else {
    promotionEl.classList.remove("show");
    promotionToggleBtn.classList.remove("rotate");
  }
});

// magic scroll
const spyEls = document.querySelectorAll("section.scroll-spy");
spyEls.forEach(function (spyEl) {
  new ScrollMagic.Scene({
    triggerElement: spyEl,
    triggerHook: 0.8,
  })
    .setClassToggle(spyEl, "show")
    .addTo(new ScrollMagic.Controller());
});

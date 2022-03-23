## Favicon(파비콘, favorites icon)
웹페이지를 나타내는 아이콘, 웹페이지의 로고를 설정합니다.  
대부분의 경우 루트 경로에 `favicon.ico` 파일을 위치하면 자동으로  
로딩하기 때문에 `<link />` 를 작성할 필요가 없습니다.  
`favicon.png` 파일을 사용하려면 다음과 같이 `<link />`를 작성하세요.  
```html
<link rel="shortcut icon" href="favicon.ico" /> 
<link rel="icon" href="./favicon.png" />
```
favicon.ico 64 x 64 (px) 또는 32 x 32 또는 16 x 16  
favicon.png 500 x 500 (px)

## Reset.css
> 각 브라우저의 기본 스타일을 초기화합니다.  
> [jsdelivr이동](https://www.jsdelivr.com/package/npm/the-new-css-reset)
> ```html
> <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/reset-css@5.0.1/reset.min.css" />
> ```

## 오픈 그래프(The Open Graph protocol)
>웹페이지가 소셜 미디어(페이스북 등)로 공유될 때 우선적으로 활용되는 정보를 지정합니다.  
[더 많은 오픈그래프 속성 보기](https://ogp.me/)

## swifer
>기본적인 슬라이드도 만들기 어렵지만, swifer 슬라이드 플러그인을 통해 간단히 슬라이드를 제작할 수 있으며
이 안에 다양한 슬라이드 형태들을 통해 개성있는 웹 페이지 슬라이드를 구성 할 수 있습니다.
>css
swifer 슬라이드 플러그인과 연결하기 위해서는 아래에 있는 링크를 header 안에 삽입하여 주세요.
```html
<link rel="stylesheet" href="https://unpkg.com/swiper@8/swiper-bundle.min.css" />
    <script src="https://unpkg.com/swiper@8/swiper-bundle.min.js"></script>
```
>html
```html
<!-- Slider main container -->
<div class="swiper">
  <!-- Additional required wrapper -->
  <div class="swiper-wrapper">
    <!-- Slides -->
    <div class="swiper-slide">Slide 1</div>
    <div class="swiper-slide">Slide 2</div>
    <div class="swiper-slide">Slide 3</div>
    ...
  </div>
  <!-- If we need pagination -->
  <div class="swiper-pagination"></div>

  <!-- If we need navigation buttons -->
  <div class="swiper-button-prev"></div>
  <div class="swiper-button-next"></div>

  <!-- If we need scrollbar -->
  <div class="swiper-scrollbar"></div>
</div>
```
>자바스크립트를 통해 옵션들을 변경하여 다양한 슬라이드 효과들을 구성할 수 있습니다. 
```javascript
new Swiper('.promotion .swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoplay : {
        delay : 5000
    },
    pagination : {
        el : ".promotion .swiper-pagination",
        clickable : true
    },
    navigation : {
        prevEl : ".promotion .swiper-prev",
        nextEl : ".promotion .swiper-next"
    },
    slidesPerView : 3, //한번에 보여줄 슬라이드 개수
    spaceBetween : 10, //슬라이드 사이 여백
    centeredSlides : true,//1번 슬라이드가 가운데 보이기
    breakpoints: { //반응형 조건 속성
    320: { //320 이상일 경우
      slidesPerView: 1, //레이아웃 2열
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
  }
  });
```

## 구글 폰트 설정
>간단한 링크 연결을 통해 구글에 있는 다양한 폰트들을 사용 할 수 있으며, 나눔고딕체를 사용하였습니다
```html
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@400;700&display=swap" rel="stylesheet">
```
##  구글 아이콘 설정
>폰트 설정과 마찬가지로 링크 연견을 통해 구글에 있는 다양한 아이콘들을 사용 할 수 있습니다.
```html
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
```
## gsap
>gsap 플러그인을 통해 다양한 애니메이션을 사용 할 수 있으며, 메인 비쥬얼 영역에서 순차적으로 나타나는 효과를 주었습니다
```html
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.1/gsap.min.js"
        integrity="sha512-H6cPm97FAsgIKmlBA4s774vqoN24V5gSQL4yBTDOY2su2DeXZVhQPxFK4P6GPdnZqM9fg1G3cMv5wD7e6cFLZQ=="
        crossorigin="anonymous" referrerpolicy="no-referrer"></script>
```

>순차적으로 나타나는 효과의 자바스크립트는 이렇게 주었습니다.
```javascript
const fadeEl = document.querySelectorAll(".visual .fade-in");
fadeEl.forEach(function (fadeEl, index) {
  // gsap문법 => gsap.to(요소, 지속시간(초단위), 옵션)
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * 0.3, //0.7 ,1.4, 2.1, 2.8
    opacity: 1,
  });
});
```

## scroll Magic
>스크롤 매직이라는 플러그인을 통해, 기존 스크롤에 따른 효과를 주기 위해서 복잡했던 과정을 단순하게 처리할 수 있습니다.
아래 스크립트로 문서와 연결한 뒤 사용해 줍니다.
```html
    <script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.8/ScrollMagic.min.js"
        integrity="sha512-8E3KZoPoZCD+1dgfqhPbejQBnQfBXe8FuwL4z/c8sTrgeDMFEnoyTlH3obB4/fV+6Sg0a0XF+L/6xS4Xx1fUEg=="
        crossorigin="anonymous" referrerpolicy="no-referrer"></script>
```

>javascript
scrill-spy라는 클래스를 통하여 스크롤 효과가 나타나길 원하는 html 태그 위치에 클래스를 추가해주면 스크롤이 그 위치를 터치했을 때 효과가 나타납니다.
```javascript
const spyEls = document.querySelectorAll("section.scroll-spy");
spyEls.forEach(function (spyEl) {
  new ScrollMagic.Scene({
    triggerElement: spyEl,
    triggerHook: 0.8,
  })
    .setClassToggle(spyEl, "show")
    .addTo(new ScrollMagic.Controller());
});
```

## toggle promotion section
>버튼을 클릭시 프로모션 슬라이드영역이 나타났다 사라지게하는 효과를 자바스크립트를 통해 넣었습니다.
>슬라이드가 나타나있지 않았을 때 버튼 방향은 아래로 향하게 하고
>버튼을 눌러 슬라이드가 나타났을 때는 버튼을 180도 회전시켜 위 방향을 바라보도록 설정하였습니다.
# Before
>![toggle-btn-before](./images/toggle-promotion-before.PNG)

# after
>![toggle-btn-before](./images/toggle-promotion-after.PNG)
>Javascript
```javascript
const promotionEl = document.querySelector(".promotion"); //슬라이드 영역 요소
const promotionToggleBtn = document.querySelector(".toggle-promotion"); //슬라이드 영역을 토글할 버튼 검색

let isHidePromotion = false;


promotionToggleBtn.addEventListener("click", function () {
  isHidePromotion = !isHidePromotion;
  if (isHidePromotion) {
    promotionEl.classList.add("show");
    promotionToggleBtn.classList.add("rotate"); //버튼 180도 회전기능 
  } else {
    promotionEl.classList.remove("show");
    promotionToggleBtn.classList.remove("rotate"); 
  }
});
```

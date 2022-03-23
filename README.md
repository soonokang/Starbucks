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
웹페이지가 소셜 미디어(페이스북 등)로 공유될 때 우선적으로 활용되는 정보를 지정합니다.  
[더 많은 오픈그래프 속성 보기](https://ogp.me/)

## swifer
기본적인 슬라이드도 만들기 어렵지만, swifer 슬라이드 플러그인을 통해 간단히 슬라이드를 제작할 수 있으며
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
자바스크립트를 통해 옵션들을 변경하여 다양한 슬라이드 효과들을 구성할 수 있습니다. 
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
간단한 링크 연결을 통해 구글에 있는 다양한 폰트들을 사용 할 수 있으며, 나눔고딕체를 사용하였습니다
```html
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@400;700&display=swap" rel="stylesheet">
```
##  구글 아이콘 설정
폰트 설정과 마찬가지로 링크 연견을 통해 구글에 있는 다양한 아이콘들을 사용 할 수 있습니다.
```html
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
```

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

##swifer
>css
```html
<link rel="stylesheet" href="https://unpkg.com/swiper@8/swiper-bundle.min.css" />
    <script src="https://unpkg.com/swiper@8/swiper-bundle.min.js"></script>
```

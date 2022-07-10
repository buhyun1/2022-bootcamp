### CSS의 기초 문법

>h1 { color: red }  <br>
>h1, color, red 세 개의 단어가 있는데 각각 선택자, 속성, 값이라고 합니다.<br>
>```선택자(selector)``` 무엇을 꾸밀지 정합니다. h1은 h1 요소를 꾸미겠다는 뜻<br>
>```속성(property)``` 어떤 모양을 꾸밀지 정합니다. color는 색을 꾸미겠다는 뜻<br>
>```값(value)``` 어떻게 꾸밀지 정합니다. red는 빨간색으로 만들겠다는 뜻

>```id``` 선택자는 CSS를 적용할 대상으로 특정 요소를 선택할 때 사용<br>
>```class``` 선택자는 특정 집단의 여러 요소를 한 번에 선택할 때 사용
 
### CSS 적용하는 방법  
  <Strong>Inline style</strong>
>display 속성이 ```inline```으로 지정된 엘리먼트는 전후 줄바꿈 없이 한 줄에 다른 엘리먼트들과 나란히 배치 <br>
>대표적인 inline 엘리먼트로 <.span>이나 <.a>, <.em> 태그 등 있음.<br><br>
>display 속성이 ```block```으로 지정된 엘리먼트는 전후 줄바꿈이 들어가 다른 엘리먼트들을 다른 줄로 밀어내고 혼자 한 줄을 차지 <br>
>대표적인 block 엘리먼트로 <.div>이나 <.p>, <.h1> 태그 등 있음
```
  ex)
  <body>

    <h2 style="color:green; text-decoration:underline">

        인라인 스타일을 이용하여 스타일을 적용하였습니다.

    </h2>

</body>
```  
  
  <Strong>Internal style sheet</strong>
>내부 스타일 시트를 이용하는 방법은 HTML 문서 내의 <head>태그에 <style>태그를 사용하여 CSS 스타일을 적용
```
  ex)
  <head>

    <style>

        body { background-color: lightyellow; }

        h2 { color: red; text-decoration: underline; }

    </style>

</head>
```  
 <Strong>External style sheet</strong>
>외부 스타일 시트를 이용하는 방법은 웹 사이트 전체의 스타일을 하나의 파일에서 변경할 수 있도록 함<br>
>외부에 작성된 이러한 스타일 시트 파일은 .css 확장자를 사용하여 저장<br>
>스타일을 적용할 웹 페이지의 <head>태그에 <link>태그를 사용하여 외부 스타일 시트를 포함해야만 스타일이 적용
 ```
 ex)
<head>

    <link rel="stylesheet" href="/examples/media/expand_style.css">

</head>
 ```

### CSS 규칙의 우선순위
 
>1. 속성 값 뒤에 !important 를 붙인 속성<br>
>2. HTML에서 [style]을 직접 지정한 속성<br>
>3. #id 로 지정한 속성<br>
>4. .클래스, :추상클래스 로 지정한 속성<br>
>5. 태그이름 으로 지정한 속성<br>
>6. 상위 객체에 의해 상속된 속성<br>
 
### 박스 모델
 
 ```
1. 내용(content) : 텍스트나 이미지가 들어있는 박스의 실질적인 내용 부분입니다.

2. 패딩(padding) : 내용과 테두리 사이의 간격입니다. 패딩은 눈에 보이지 않습니다.

3. 테두리(border) : 내용와 패딩 주변을 감싸는 테두리입니다.

4. 마진(margin) : 테두리와 이웃하는 요소 사이의 간격입니다. 마진은 눈에 보이지 않습니다.
 ```
 
### 레이아웃 요소 
```position```<br>
><relative>  
>요소를 원래 위치를 기준으로 상대적(relative)으로 배치<br>
>요소의 위치 지정은 top, bottom, left, right 속성을 이용<br>
>요소가 원래 위치에 있을 때의 상하좌우로 부터 얼마나 떨어지게 할지를 지정<br>
 
```display```
>display: block;<br>
>일반적으로 설정하지 않아도 div가 갖게되는 기본값<br>
>쉽게 말하자면, 가로 한 줄을 다 차지하게 됩니다.<br>
>display: inline;<br>
>컨텐츠를 딱 감쌀정도의 크기<br>
>block태그와 다르게 줄바꿈이 되지 않고, 반드시 컨텐츠를 감싸게 되고, 크기를 변화시킬 수 없습니다.<br>
 
>display: inline; 은 텍스트처럼<br>
>display: block; 은 쌓이는 상자처럼<br>
 
CSS Flexbox와 Grid

### 중앙정렬
>div = margin:0 auto;<br>
>img, text = "text-align:center"

### 새창에서 a태그 열기
>target="_blank"<br>

### 칸 여백 정리
> padding-right<br>

### 이미지 조절
>positon: absoulte;는 position: relative 속성을 가지는 가장 가까운 요소를 기준으로 절대적인 위치를 가지도록 함.<br>
>width: 100%;는 삽입된 이미지의 가로세로비를 유지한 채, 가로폭을 기준으로 세로 길이가 잘리도록 함. 이때, 가로 길이는 < div class='container' >에 설정한 width.<br>
>height: 100%;는 삽입된 이미지의 가로세로비를 유지한 채, 세로폭을 기준으로 가로 길이가 잘리도록 함. 이때, 세로 길이는 < div class='container' >에 설정한 height.<br>
>width: 100%;와 height: 100%; 를 모두 입력하면 삽입된 이미지의 가로세로비가 망가지더라도 < div class='container' >에 설정한 width와 height 길이만큼 늘어남.<br>
>top: 50%;, left: 50%;, transform: translate(-50%, -50%);는 < img >태그를 < div class='container' > 안에서 가운데 정렬시킴.<br>

### checklist
---
CSS를 HTML에 적용하는 세 가지 방법은 무엇일까요?
세 가지 방법 각각의 장단점은 무엇일까요?
CSS 규칙의 우선순위는 어떻게 결정될까요?
CSS의 박스모델은 무엇일까요? 박스가 화면에서 차지하는 크기는 어떻게 결정될까요?
float 속성은 왜 좋지 않을까요?
Flexbox(Flexible box)와 CSS Grid의 차이와 장단점은 무엇일까요?
CSS의 비슷한 요소들을 어떤 식으로 정리할 수 있을까요?

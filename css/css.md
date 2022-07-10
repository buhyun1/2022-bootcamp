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
>대표적인 inline 엘리먼트로 <.span>이나 <.a>, <.em> 태그 등을 들 수 있습니다.<br><br>
>display 속성이 ```block```으로 지정된 엘리먼트는 전후 줄바꿈이 들어가 다른 엘리먼트들을 다른 줄로 밀어내고 혼자 한 줄을 차지 <br>
>대표적인 block 엘리먼트로 <.div>이나 <.p>, <.h1> 태그 등을 들 수 있습니다.
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
  
### 박스 모델과 레이아웃 요소
  박스 모델: width, height, margin, padding, border, box-sizing
  position, left, top, display
  CSS Flexbox와 Grid

중앙정렬
div = margin:0 auto;
img, text = "text-align:center"

새창에서 a태그 열기
target="_blank"

여백
Margin은 Object와 화면과의 여백(외부여백)을 말하며
Padding은 Object내의 내부여백을 의미합니다.

칸 여백 정리
padding-right

이미지 조절
positon: absoulte;는 position: relative 속성을 가지는 가장 가까운 요소를 기준으로 절대적인 위치를 가지도록 한다.
width: 100%;는 삽입된 이미지의 가로세로비를 유지한 채, 가로폭을 기준으로 세로 길이가 잘리도록 한다. 이때, 가로 길이는 < div class='container' >에 설정한 width이다.
height: 100%;는 삽입된 이미지의 가로세로비를 유지한 채, 세로폭을 기준으로 가로 길이가 잘리도록 한다. 이때, 세로 길이는 < div class='container' >에 설정한 height이다.
width: 100%;와 height: 100%; 를 모두 입력하면 삽입된 이미지의 가로세로비가 망가지더라도 < div class='container' >에 설정한 width와 height 길이만큼 늘어난다.
top: 50%;, left: 50%;, transform: translate(-50%, -50%);는 < img >태그를 < div class='container' > 안에서 가운데 정렬시킨다.

checklist
---
CSS를 HTML에 적용하는 세 가지 방법은 무엇일까요?
세 가지 방법 각각의 장단점은 무엇일까요?
CSS 규칙의 우선순위는 어떻게 결정될까요?
CSS의 박스모델은 무엇일까요? 박스가 화면에서 차지하는 크기는 어떻게 결정될까요?
float 속성은 왜 좋지 않을까요?
Flexbox(Flexible box)와 CSS Grid의 차이와 장단점은 무엇일까요?
CSS의 비슷한 요소들을 어떤 식으로 정리할 수 있을까요?

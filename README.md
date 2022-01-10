# ReactPractice

## CSR vs  SSR

### CSR
- JS가 전부 다운로드 되어 리액트 앱이 정상 실행되기 전까지는 화면이 보이지 않음
- JS가 전부 다운로드 되어 리액트 앱 정상 실행 후, 화면이 보이면서 유저가 인터렉션 가능

### SSR
- JS 가 전부 다운로드 되지 않아도, 일단 화면은 보이지만 유저가 사용 할 수 없음.
- JS가 전부 다운로드 되어 리액트 애플리케이션이 정상 실행된 후, 유저가 사용 가능

## 리액트 핵심 모델
- 1. 리액트 컴포넌트 -> HTMLElement 연결
```
import ReactDOM from 'react-dom';
```
- 2. 리액트 컴포넌트 만들기
```
import React from 'react';
```
## React.CreateElement

### type
태그 이름 문자열 | 리액트 컴포넌트 | React.Fragment

### [props]
- 리액트 컴포넌트에 넣어주는 데이터 객체

### [...children]
- 자식으로 넣어주는 요소들

## JSX문법
- 최상위 요소는 하나여야함.
- 최상위 요소를 리턴하는 경우 ()로 감싸야 한다.
- 자식들을 바로 랜더링 하고 싶으면 <>자식들</>사용 => Fragment
- 자바스크립트 표현식을 사용하려면 {표현식} 사용합니다.
- if문 사용 불가!!! -> 삼항연산자 또는 && 사용!
- style을 이용해 인라인 스타일링이 가능
- class 대신 className사용해 class 적용
- 자식요소가 있으면, 꼭 닫아야함 자식요소가 없으면 열면서 닫아야함 
    - ex) <p> ~~~ </p>
    - <br />


### getDerivedStateFromProps
- props를 새로 지정했을 때 바로 호출
- state의 변경에 반응하지 않습니다.
- props의 값에 따라 state를 변경해야 한다면,
    -  setState를 이용해 state를 변경
    -  변경하게 되면 다음 이벤트로 각각 가는 것이 아닌 한번에 변경됨.

### shouldComponentUpdate 
- props, state만 변경되어도
- props&state 둘다 변경되어도
- newProps와 new State를 인자로 해서 호출
- 리턴 타입이 boolean임
    - true면 render
    - 이 함수를 구현하지 않으면 디폴트는 true값

### getSnapshotBeforeUpdate
- 컴포넌트가 재 랜더링 되기 직전에 불림.
- 여기선 setState같은 것을 쓰면 안됨

### componentDidUpdate
- 컴포넌트가 재 랜더링을 마치면 불림.


### useState
- state를 대체할 수 있다.

### useEffect
- 라이프 사이클 훅을 대체할 수 있다
    - componentDidMount
    - componentDidUpdate
    - componentWillUnmount
- defendency와 lifecycle은 다른거기 때문에 100%일치하는 개념이 아니다. 
- render와 defendency리스트와 밀첩한 관계가 있다

## 배포
- npm install serve -g
- serve -s folderName

## Server side Rendering
- 서버에서 응답을 가져올 때, 기존 처럼 스태틱 파일만 가져오는 것이 아니고 서버에서 응답값을 만들어 내려주고, 그 후에 스태틱 파일을 내려줌.
- 스태틱 파일을 다 내려받고, 리액트 앱을 브라우저에서 실행한 뒤에는 SPA처럼 동작

## React Server Side Rendring
- React Component를 브라우저가 아니라 Node.js에서 사용
- 라우팅 리덕스 같은 처리를 서버에서 진행하고 내려준다.
    - 어려움
- JSX가 포함된 리액트 코드를 서버에서 읽을 수 있도록 bable 설정해야함.
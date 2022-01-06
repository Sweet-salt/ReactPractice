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
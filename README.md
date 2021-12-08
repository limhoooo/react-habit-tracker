# CRUD 게시판
 https://limhoooo-habit-tracker.netlify.app
# React
특징 <br>
state 가 변경되면 컴포넌트트리 전체가 리 랜더링이 된다<br>
하지만 일반 DOM이 아닌 <br>
가상DOM 으로 인해 성능이 좋다<br>

### npm 
라이브러리를 설치 관리 해주는 툴<br>
### npx
라이브러리를 바로 실행할 수 있는 툴<br>
### yarn 
npm이랑 같은 패키지 매니저 npm 보다 성능,보안이 좋음 <br>
npm 위에서 동작<br>

### 클래스 / 펑션
상태가 리랜더링 되야하면 클래스<br>
정적 컴포넌트는 간단하게 펑션<br>
였는데<br>
16.8 부턴 펑션에서도 리액트 훅 으로 클래스랑 동일하게 동작하게끔 업데이트됨<br>
그리고 클래스 문법은 this나 바인딩 문제가 있어서 불편했다고함<br>
그래서 펑션이 유행하고 있다함<br>
큰 차이점은 리액트훅<br>

### <React.Fragment>
의미없는 엘리먼트 즉 엘리먼트끼리 묶기만을 위함<br>
html 노드 묶을때 사용<br>
vue 에서 template 로 묶어줄때 썻던것과 동일<br>
<> 로도 사용가능<br>

### state 수정
state 를 수정할땐 setState를 사용해서 값을 변경 해야<br>
리랜더링이 된다. <br>

### PureComponent
리랜더링 사용안함<br>
해당컴포넌트와 상관없는 다른곳에서 state 나 data 변경시 <br>
랜더링되는것을 막아줌<br>
본인 컴포넌트 state data 만 비교해서 랜더링 할지말지 결정함<br>
성능이슈 <br>
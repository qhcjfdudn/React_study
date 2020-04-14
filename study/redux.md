# Redux

데이터 관리를 위해 만들어진 것
데이터를 **스토어(store)**에서 관리한다.

컨텍스트의 공급자, 소비자와 비슷한 관계인데, **여러 개의 공급자를 관리하던 컨텍스트**와는 달리 리덕스에서는 '**스토어에서 모든 데이터를 관리**한다.

#### 그럼 둘 중 어떤걸 쓸까?

- 서버에서 가져온 데이터를 이용하여 새로운 결과물을 만드는 경우 -> 리덕스
- 컴포넌트의 통합 데이터를 관리하는 경우 -> 컨텍스트



#### 리액트의 데이터 전달을 위한 개념들을 다시 정리하면

- 프로퍼티 : 상위 컴포넌트에서 하위 컴포넌트로 전달되는 읽기 전용 데이터
- state : 컴포넌트의 state를 저장하고 변경할 수 있는 데이터
- 컨텍스트 : 부모 컴포넌트에서 생성하여 모든 자식 컴포넌트에 전달하는 데이터
- 리덕스 : 서버에서 받은 데이터를 앱 전체에 전달하거나 관리



```bash
yarn add redux react-redux

# 필요에 따라 chrome extension에 redux devtools도 설치한다
https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd/related?hl=ko

# 리덕스 코드와 크롬 확장 도구를 이어주기 위해 개발자 확장 라이브러리도 설치
yarn add redux-devtools-extension --dev
```



#### 리덕스로 빈 스토어 생성해 보기

```javascript
createStore(reducer, /* 초깃값 */, /* 미들웨어 함수 */);
```

초깃값과 함수는 생략 가능.



#### 스토어 생성 및 redux-devtools 개발자 도구 연동

```javascript
import React, { PureComponent } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

class ReduxApp extends PureComponent {
  // store = createStore(state => state); 초깃값, 함수 없이 생성 가능
  store = createStore(
    state => state,
    { loading: false, name: '두잇 리액트' },
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  render() {
    return (
      <Provider store={this.store}>
      리덕스 예제
      </Provider>
    )
  }
}

export default ReduxApp;
```



## 액션과 리듀서

#### 액션

type과 payload(payload의 명칭은 달라져도 된다.)로 이루어진 객체

```javascript
{
    type: 'SET_LOADING',
    payload: true,
}
{
    type: 'SET_USER',
    payload: { name: 'Park', age: 20 }.
}
{
    type: 'RESET_LOADING'
    // payload 생략 가능
}
```



#### 리듀서

다음과 같은 간단한 함수 구조

```javascript
function reducer(state, action) { return state; }
```

리듀서는 스토어의 이전 데이터(state), 액션(action)을 받아 새로운 데이터를 반환한다.

아래는 스토어의 이전 데이터를 새로운 데이터로 변경하는 예이다.

```javascript
// 함수이기 때문에 이와 같이 만들 수도 있다.
const reducer = (state, action) => store + action.payload;
```

- 리듀서가 반환하는 값의 자료형은 스토어의 이전 데이터와 동일해야 한다.
  - 대부분의 경우 객체를 사용하기 때문에, 자료형까지는 신경쓰지 않아도..



#### dispatch() 함수

액션은 dispatch() 함수를 통해 reducer로 전달

위의 소스에서 store = create( ... ); 의 하위에 아래의 소스를 추가한다.

```javascript
componentDidMount() {
    this.store.dispatch({ // dispatch의 인자로 액션을 담는다.
      type: 'SET_LOADING',
      payload: true,
    });
  }
```



#### 리듀서에 대해 깊게 보자

- 리듀서라는 이름은 배열 함수 중 reduce()에서 따온 것

- 리듀서는 변환 함수 배열을 최종 스토어 데이터로 변환
- 
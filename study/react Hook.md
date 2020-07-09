# react Hook

### 동기

- 컴포넌트 사이에서 상태와 관련된 로직을 재사용하기 어렵다.
  - render props, 고차 컴포넌트, providers, consumers와 같은 래퍼 지옥은 상태 관련 로직을 재사용하기 어렵기 때문.
- 복잡한 컴포넌트들은 이해하기 어렵다.
  - componentDidMount, componentDidUpdate와 같은 함수들은 그 안에 서로 관련 없는 로직들이 나열될 수 있다. -> Hook을 통해 로직에 기반을 둔 작은 함수로 나누는 데 초점.(구독 설정 및 데이터를 불러오는 것과 같은 로직)
- Class는 사람과 기계를 혼동시킨다.



### 훅이 뭔가요?

Hook은 함수 컴포넌트에서 React state와 생명주기 기능(lifecycle features)을 “연동(hook into)“할 수 있게 해주는 함수



## 배워보자

### useState

class형의 this.setState는 기존의 state와 새로운 state를 합치지만, useState를 통한 갱신은 기존의 state를 사용하지 않는다.

[배열과 객체 구조 분해 할당](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#배열_구조_분해)



### useEffect

`componentDidMount`, `componentDidUpdate`, `componentWillUnmount`가 합쳐진 것

기본적으로 React는 매 렌더링 이후에 effects를 실행



이러한 훅은 반드시 함수 내의 최상위에만 선언하자. 반복문, if문 등 내부에서 선언 불가능.

React 함수 컴포넌트 내에서만 훅을 호출.'

#### 구독과 같은 동작을 해제하고 싶을 때 

- 함수 내에 return 함수를 수행하면 컴포넌트가 마운트 해제되는 때에 정리(clean-up)를 실행



App.js

```react
import './App.css';
import React from 'react';
import UseEffectComp from './components/UseEffectComp';

function App() {
  return (
    <UseEffectComp />
  );
}

export default App;

```

UseEffectComp.jsx

```react
import React, { useState, useEffect } from 'react';
import UseStateComp from './UseStateComp';

const UseEffectComp = () => {
  const [cnt, setCnt] = useState(0);

  return (
    <div>
      <p>{cnt}</p>
      <button onClick={() => setCnt(cnt + 1)}>btn</button>
      
      {(cnt % 2) === 1 ? <UseStateComp /> : <></> }
    </div>
  )
};

export default UseEffectComp;
```

UseStateComp.jsx

```react
import React, { useState, useEffect } from 'react';

const UseStateComp = () => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    // 페이지의 title을 바꿔준다 ㅎㄷㄷ
    // componentDidMount, componentDidUpdate 포함
    document.title = `${count}`;

    // Effect를 해제하는 방법(optional)
    // 메모리라거나 소켓처럼 연결 상태라거나 하는 것들을 해제해줄 때.
    // 새로 업데이트 될 때마다 매번 실행. 상위 컴포넌트에 의해 DOM에서 사라질 때(unmount)에도 실행.
    return () => {
      console.log('clear');
    };
  });

  // useState, useEffect를 여러 개 선언함으로 관련된 로직끼리 묶을 수 있다. 

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>click</button>
    </div>
  )
};

export default UseStateComp;
```



### useContext



### useReducer





## Hook에 대해 more deep!!

1. Hook은 클래스 안에서 동작하지 않는다. 함수 컴포넌트는 this를 가질 수 없다.

2. 일반적으로 effect라는 건 동기적으로 실행될 필요는 없지만, 동기를 맞추고 싶다면 useEffect와 동일한 API를 사용하는 useLayoutEffect를 사용.
3. 리액트 애플리케이션의 흔한 버그 중의 하나가 `componentDidUpdate`를 제대로 다루지 않는 것. 데이터가 바뀔 때 제대로 동기화를 해주기 위해 이를 꼭 수행하자.

4. react가 Hook이 호출되는 순서에 의존한다. 모든 렌더링에서 Hook의 호출 순서가 같기 때문에 올바르게 동작


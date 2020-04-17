# Context

부모와 자식 컴포넌트가 연결돼 있지 않아도 데이터를 공유할 수 있게 해준다.



### 공급자와 소비자

관찰자 패턴(Observable Pattern) : 데이터는 공급자가 관리하고 관찰자는 공급자를 구독하여 데이터를 얻는 방식

공급자는 데이터를 보관, 변경, 소비자에게 데이터를 공급하는 역할. 관찰자는 공급자를 구독하여 데이터를 소비하는 역할. 그래서 관찰자를 소비자라고 부르기도 함.



#### 공급자와 소비자와의 관계

- 소비자는 공급자보다 낮은 계층에 있어야 한다.

- 소비자는 공급자가 제공하는 콜백 함수로 데이터를 변경할 수 있다.



## Context API 활용하기

#### CreateContext() 함수로 공급자와 소비자 만들기

```javascript
const MyContext = React.createContext(defaultValue); // defaultValue는 {} 요딴거.
// MyContext.Provider, MyContext.Consumer로 사용
// 또는 const { Provider, Consumer } = React.createContext(defaultValue);
```

공급자와 소비자는 각각 독립된 저장 공간을 가지면서 짝을 이뤄 데이터를 공유한다.
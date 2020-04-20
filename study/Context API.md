# Context API

### React.createContext

```react
const MyContext = React.createContext(defaultValue);
```

defaultValue 매개변수는 트리 안에서 적절한 Provider를 찾지 못했을 때에만 쓰인다.

### Context.Provider

```react
<MyContext.Provider value={/* 어떤 값 */}>
```

주의할 점 : 위와 같은 방식으로 변화를 측정하기 때문에 객체를 `value`로 보내는 경우 다소 문제가 생길 수 있다. [주의사항](https://ko.reactjs.org/docs/context.html#caveats)을 참조!
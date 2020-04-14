
// 쿼리 스트링 'banana=10&apple=20&orange=30'를 &를 기준으로 분리하여 객체에 담아 반환
function parse(qs) {
  const queryString = qs.substr(1);
  const chunks = queryString.split('&');
  const result = chunks
    .map((chunk) => {
      const [key, value] = chunk.split('=');
      value = Number.isNaN(Number(value)) ? value : Number(value);
      return { key: key, value: value };
    })
    .reduce((result, item) => {
      result[item.key] = item.value;
      return result;
    }, {});
  return result;
}

function sum(numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

sum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

class Store {
  state = {};
  dispatch(action) {
    const reducer1 = state => state;
    const reducer2 = (state, action) => state + action.payload;
    /* 여러가지 더 있다. */
    const reducers = [reducer1, reducer2, /* 여러가지들 */];
    
    const updatedState = reducers.reduce(
      (nextState, reducer) => reducer(nextState, action),
      this.state
    );
    this.state = updatedState;
  }
}
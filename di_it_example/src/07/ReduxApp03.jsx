import React, { PureComponent } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "SET_LOADING": {
      return {
        ...state,
        loading: payload,
      };
    }
    default:
      return state;
  }
};

class ReduxApp3 extends PureComponent {
  // store = createStore(state => state);
  store = createStore(
    reducer,
    { loading: false, name: '두잇 리액트' },
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  componentDidMount() {
    this.store.dispatch({
      type: 'SET_LOADING',
      payload: true,
    });
  }

  render() {
    return (
      <Provider store={this.store}>
      리덕스 예제
      </Provider>
    )
  }
}

export default ReduxApp3;
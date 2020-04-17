import React, { PureComponent } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import { setLoading, resetLoading } from './actions/loadingActions';
import { setUser } from './actions/userActions';

/*
const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'SET_LOADING': {
      return {
        ...state,
        loading: payload,
      };
    }
    case 'RESET_LOADING': {
      return {
        ...state,
        loading: false,
      };
    }
    case 'SET_USER': {
      return {
        ...state,
        user: payload,
      }
    }
    default:
      return state;
  }
};
*/

class ReduxApp extends PureComponent {
  // store = createStore(state => state);

  /*
  store = createStore(
    reducer,
    { loading: false, name: '두잇 리액트' },
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  */
 
  store = configureStore({ loading: false, });
  componentDidMount() {
    this.store.dispatch(setLoading(true));
    this.store.dispatch(resetLoading());
    this.store.dispatch(setUser({ name: 'Park', age: 20 }));
  }

  render() {
    return (
      <Provider store={this.store}>
      리덕스 예제
      </Provider>
    )
  }
}

export default ReduxApp;
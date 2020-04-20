// reducer들을 통합할 configureStore 파일을 정의한다.
import { createStore, combineReducers } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers';

export default initStates => createStore(
  combineReducers(reducers),
  initStates,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
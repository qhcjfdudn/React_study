import React, { PureComponent } from 'react';
import { Provider } from 'react-redux';
import ViewComponent from './ViewComponent';
import ContainerComponent from './containers/ContainerComponent';
import configureStore from './configureStore';
import DispatchContainer01 from './containers/DispatchContainer01';
import InputTest from './components/InputTest';

export const globalStore = configureStore({user: {name: 'hyunjin'}});

class ReduxApp extends PureComponent {
  // store = configureStore({user: {name: '1231', value: 123312, }});
  store = globalStore;

  // componentDidMount() { // 기본적으로 store의 데이터를 갱신하는 방법.
  //   this.store.dispatch({
  //     type: 'SET_USER',
  //     payload: {
  //       user: {
  //         name: 'gg',
  //         value: 123,
  //       }
  //     }
  //   });
  // }

  render() {
    return <Provider store={this.store}>
      {console.log('store: ', this.store.getState())}
      화면 컴포넌트: <ViewComponent userName="화면 컴포넌트" hyunjin={{id: 123, name: 'hyunjin'}}/>
      <br/>
      {/* 데이터 컴포넌트: <ContainerComponent value={2} /> */}
      <br/>
      액션 데이터 컴포넌트: <DispatchContainer01 value={20}/>
      <br/>
      <InputTest />
    </Provider>
  }
}

export default ReduxApp;
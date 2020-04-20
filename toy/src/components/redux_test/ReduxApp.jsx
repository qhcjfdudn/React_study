import React, { PureComponent } from 'react';
import { Provider } from 'react-redux';
import ViewComponent from './ViewComponent';
import ContainerComponent from './ContainerComponent';
import configureStore from './configureStore';

class ReduxApp extends PureComponent {
  store = configureStore({user: {name: '1231', value: 123312, }});

  componentDidMount() {
    this.store.dispatch({
      type: 'SET_USER',
      payload: {
        user: {
          name: 'gg',
          value: 123,
        }
      }
    });
  }

  render() {
    return <Provider store={this.store}>
      {console.log('store: ', this.store.getState())}
      화면 컴포넌트: <ViewComponent userName="화면 컴포넌트" hyunjin={{id: 123, name: 'hyunjin'}}/>
      <br/>
      데이터 컴포넌트: <ContainerComponent value={2} />
    </Provider>
  }
}

export default ReduxApp;
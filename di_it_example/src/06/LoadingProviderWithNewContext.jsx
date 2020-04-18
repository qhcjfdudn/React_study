import React, { createContext, PureComponent } from 'react';

const { Provider, Consumer } = createContext({});

export { Consumer };

export default class LoadingProvider extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
    this.setLoading = this.setLoading.bind(this);
    print(this)
  }
  
  setLoading(key, value) {
    const newState = { [key]: value };
    this.setState(newState); // setState()의 동작은 비동기로 동작한다!!
  }

  render() {
    const context = {
      ...this.state,
      setLoading: this.setLoading
    };

    return (
      <Provider value={context}>
        {this.props.children}
      </Provider>
    );
  }
}
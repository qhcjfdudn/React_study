import React, { createContext, PureComponent } from 'react';

const { Provider, Consumer } = createContext({});

export { Consumer };

export default class LoadingProvider extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
    this.setLoading = this.setLoading.bind(this);
  }

  setLoading(key, value) {
    const newState = { [key]: value };
    this.setState(newState);
  }

  render() {
    const context = {
      ...this.state,
      setLoading: this.setLoadingm
    };

    return (
      <Provider value={context}>
        {this.props.children}
      </Provider>
    );
  }
}
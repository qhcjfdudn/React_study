import React from 'react';

export default class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // 콜백에서 `this`가 작동하려면 아래와 같이 바인딩 해주어야 합니다.
    // this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
    console.log(e)
  }

  render() {
    return (
      <button onClick={(e) => this.handleClick(e)}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}

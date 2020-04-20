import React, { PureComponent } from 'react';

export default class ViewComponent extends PureComponent {
  render() {
    return (
      <div>
        이름: {this.props.userName}
        데이터: {this.props.value}
      </div>
    )
  }
}
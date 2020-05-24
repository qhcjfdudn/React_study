import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
// import Button from '../../components/Button';

class ViewComponent2 extends PureComponent {
  render() {
    const { setAge } = this.props;
    console.log('setAge:', setAge); 

    return (
      <React.Fragment>
        <button onClick={() => setAge(2, 19)}>고유번호 2번 나이 19세로 변경</button>
        <br/>
        id:{this.props.userName}
        <br/>
        age:{this.props.value}
        {console.log(this.props)}
      </React.Fragment>
    )
  }
}

ViewComponent2.propTypes = {
  setAge: PropTypes.func,
};

export default ViewComponent2;
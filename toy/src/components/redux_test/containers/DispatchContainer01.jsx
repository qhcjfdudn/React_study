import { connect } from 'react-redux';
import ViewComponent2 from '../ViewComponent2';
import { setAge } from '../actions/Actions';

// store에서 데이터를 추출하여 객체를 반환하는 역할.
const mapStateToProps2 = (state, props) => { // provider로부터 얻은 store가 state이당
  console.log('state', state)
  console.log('props', props)
  return {
    userName: state.user.name,
    value: props.value,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setAge: (id, age) => dispatch(setAge(id, age)), 
  };
};

export default connect(mapStateToProps2, mapDispatchToProps)(ViewComponent2);
import { connect } from 'react-redux';
import ViewComponent from './ViewComponent';

const mapStateToProps = (state, props) => {
  console.log('state', state)
  console.log('props', props)
  return {
    userName: state.user.name,
    value: props.value,
  };
};

export default connect(mapStateToProps)(ViewComponent)
export default function reducer(state = {}, action) { // state의 초기값을
  //지정하지 않으면 에러가 발생
  const { type, payload } = action;
  switch (type) {
    case 'SET_USER': {
      console.log('payload :', payload);
      return payload.user;
    }
    case 'RESET_LOADING': {
      return {
        ...state,
        loading: false,
      };
    }
    default:
      console.log('default is called.');
      console.log('type:', type, 'payload:', payload, 'state:', state);
      return state;
  }
};
export const SET_AGE = 'user/SET_AGE';
export const RESET_LOADING = 'loading/RESET_LOADING';

const initState = false;

export const setAge = (id, age) => ({
  type: SET_AGE,
  payload: { id, age },
});

export const resetLoading = () => ({
  type: RESET_LOADING,
  payload: initState,
});
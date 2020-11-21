import ActionTypes from './action-types';

let initState = {
  userInfo: null,
  userToken: null,
  isLogin: false,
};

export function reducer(state = initState, action) {

  console.log("============== exec reducer");

  let newState = JSON.parse(JSON.stringify(state));

  if (action.type === ActionTypes.UPDATE_USERINFO) {
    newState.userInfo = action.value;
    console.log('newState', newState);
  }

  if (action.type === ActionTypes.UPDATE_USER_TOKEN) {
    newState.userToken = action.value;
    console.log('newState', newState);
  }

  if (action.type === ActionTypes.UPDATE_LOGIN_STATE) {
    newState.isLogin = action.value;
    console.log('newState', newState);
  }

  return newState;
}

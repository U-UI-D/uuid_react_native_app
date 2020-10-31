import Actions from './actions';

let initState = {
  userInfo: null,
  isLogin: false,
  name: 'AlanLee',
};

export function reducer(state = initState, action) {

  console.log("============== exec reducer");

  let newState = JSON.parse(JSON.stringify(state));

  if (action.type === Actions.UPDATE_USERINFO) {
    newState.userInfo = action.value;
    console.log('newState', newState);
  }

  if (action.type === Actions.UPDATE_LOGIN_STATE) {
    newState.isLogin = action.value;
    console.log('newState', newState);
  }

  if (action.type === 'updateName') {
    newState.name = action.value;
    console.log('newState', newState);
  }

  // sessionStorage.setItem("store", JSON.stringify(newState));
  return newState;
}

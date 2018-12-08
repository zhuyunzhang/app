/**
 * actions.js
 */

export function setUserInfo(userInfo) {
  return {
    // action 类型
    type: "SET_USER_INFO",

    // userinfo 是传进来的参数
    userInfo
  };
}
export function clearReduxStore() {
  return {
    type: "CLEAR_REDUX_STORE"
  };
}

/**
 * reducers.js
 * 更改为持久化存储
 */
//import { initialState } from "./store";

// 初始化 state 放在这里
const initialState = {
  userInfo: {
    name: "小光",
    gender: "男"
  }
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "SET_USER_INFO":
      // 合并 userInfo 对象
      action.userInfo = Object.assign({}, state.userInfo, action.userInfo);

      // 更新状态
    return Object.assign({}, state, { userInfo: action.userInfo });
    case "CLEAR_REDUX_STORE":
      // 清空 store 中的 userInfo 信息
      return { userInfo: {} };
    default:
      return state;
  }
}

export default reducer;

/**
 * store.js
 * 更改为持久化存储
 */

import { createStore } from "redux";

// 引入 AsyncStorage 作为存储容器
import { AsyncStorage } from "react-native";

// 引入 redux-persist
import { persistStore, persistCombineReducers } from "redux-persist";

import reducers from "./reducers";

// 持久化存储配置
const config = {
  key: "root",
  storage: AsyncStorage
};

const persistReducers = persistCombineReducers(config, {
  reducers
});

const configureStore = () => {
  const store = createStore(persistReducers);
  const persistor = persistStore(store);

  return { persistor, store };
};

export default configureStore;

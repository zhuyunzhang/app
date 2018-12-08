/**
 * index.js
 * 更改为持久化存储
 */
import React from "react";
import { PersistGate } from "redux-persist/es/integration/react";
import configureStore from "./src/redux/store";
import { AppRegistry } from "react-native";
import { Provider } from "react-redux";
import App from "./App";

const { persistor, store } = configureStore();

const ReduxApp = () => (
  // 配置 Provider 为根组件，同时传入 store 作为其属性
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);

AppRegistry.registerComponent("xrzn", () => ReduxApp);
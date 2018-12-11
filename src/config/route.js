// 引入依赖
import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation'

// 引入页面组件
import ScreenBottomTab from '../screens/ScreenBottomTab';
import ScreenHome from '../screens/ScreenHome';
import ScreenSome1 from '../screens/ScreenSome1';
import ScreenSome2 from '../screens/ScreenSome2';
import ScreenTab1 from '../screens/ScreenTab1';
import ScreenTab2 from '../screens/ScreenTab2';
import ScreenTab3 from '../screens/ScreenTab3';
import Scanning from '../screens/Scanning';

/**
 * 自定义 StackNavigator，可以选择 screen 进入方式
 * 默认状态为 card，只需要输入对应页面，比如 ..navigate('ScreenSome1')
 * 如果要使某个页面进入方式为 modal 只需要在路径上加上 Modal
 * 比如：..navigate('ScreenSome2Modal')
 */
const StackModalNavigator = (routeConfigs, navigatorConfig) => {
  const CardStackNavigator = createStackNavigator(routeConfigs, navigatorConfig);
  const modalRouteConfig = {};
  const routeNames = Object.keys(routeConfigs);

  for (let i = 0; i < routeNames.length; i++) {
    modalRouteConfig[`${routeNames[i]}Modal`] = routeConfigs[routeNames[i]];
  }

  const ModalStackNavigator = createStackNavigator(
    {
      CardStackNavigator: { screen: CardStackNavigator },
      ...modalRouteConfig,
    },
    {
      // 如果页面进入方式为 modal，需要自定义 header（默认 header 样式失效，都叠在一块了）
      mode: 'modal',
      headerMode: 'none',
    },
  );

  return ModalStackNavigator;
};


// 配置路由
const AppNavigator = StackModalNavigator({
  ScreenBottomTab: ScreenBottomTab,
  //下面几个配置的是测试Navigator不同使用场景用，只需要tab的话，只要ScreenBottomTab: ScreenBottomTab即可
  ScreenHome: { screen: ScreenHome}, 
  ScreenSome1:{ screen: ScreenSome1},
  ScreenSome2:{ screen: ScreenSome2},
  ScreenTab1: { screen: ScreenTab1 }, 
  ScreenTab2: { screen: ScreenTab2 }, 
  ScreenTab3: { screen: ScreenTab3 },
  Scanning:{screen: Scanning }
});
const App = createAppContainer(AppNavigator)
export default App

// navigationOptions:{header: null}
// import React, { Component } from 'react'
// import { createStackNavigator, createAppContainer } from 'react-navigation'

// //引入页面组件
// import ScreenHome from "../screens/ScreenHome";
// import ScreenSome1 from '../screens/ScreenSome1'


// // 配置路由
// const navigator = createStackNavigator({
//   ScreenHome: { screen: ScreenHome }, 
//   /*或者
//   Home: {
//     screen: HomeScreen
//   }
//   */
//   ScreenSome1: { screen: ScreenSome1 }
// })

// const App = createAppContainer(navigator)

// export default App

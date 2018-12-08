/**
 * ScreenBottomTab/index.js
 */
import  { createBottomTabNavigator } from 'react-navigation'

import ScreenHome from '../../screens/ScreenHome';
import ScreenTab1 from '../../screens/ScreenTab1';
import ScreenTab2 from '../../screens/ScreenTab2';
import ScreenTab3 from '../../screens/ScreenTab3';

const ScreenTab = createBottomTabNavigator(
  // 配置 tab 路由
  {
    ScreenHome: { screen: ScreenHome}, 
    ScreenTab1: { screen: ScreenTab1}, 
    ScreenTab2: { screen: ScreenTab2}, 
    ScreenTab3: { screen: ScreenTab3}
  },
  // 其他配置选项
  {
    tabBarPosition: "bottom",
  }
);
ScreenTab.navigationOptions = ({ navigation }) => {
  const { routeName } = navigation.state.routes[navigation.state.index];

  const headerTitle = routeName;
    switch(headerTitle){
    case "ScreenHome":
      return ScreenHome.headersFind;
    case "ScreenTab1":
      return ScreenTab1.headersFind;
    case "ScreenTab2":
      return ScreenTab2.headersFind;
    case "ScreenTab3":
      return ScreenTab3.headersFind;
  }
  return {
    headerTitle,
  };
};

export default ScreenTab;


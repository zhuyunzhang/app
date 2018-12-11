/**
 * ScreenBottomTab/index.js
 */
import  { createBottomTabNavigator } from 'react-navigation'

import Home from './home';
import My from './my';
import ScreenTab2 from '../src/screens/ScreenTab2';
import ScreenTab3 from '../src/screens/ScreenTab3';

const ScreenTab = createBottomTabNavigator(
    // 配置 tab 路由
    {
        Home: { screen: Home}, 
        My: { screen: My}, 
    },
    {
        tabBarPosition: "bottom",
    }
);

ScreenTab.navigationOptions = ({ navigation }) => {
    const { routeName } = navigation.state.routes[navigation.state.index];
    const headerTitle = routeName;
        switch(headerTitle){
            case "Home":
            return Home.headersFind;
        case "My":
            return My.headersFind;
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
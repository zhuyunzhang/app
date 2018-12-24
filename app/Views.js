/**
 * ScreenBottomTab/index.js
 */
import  { createBottomTabNavigator } from 'react-navigation'

import Home from './components/home';
import My from './components/my';
import Recharge from './components/recharge';

// import ScreenTab2 from '../src/screens/ScreenTab2';
// import ScreenTab3 from '../src/screens/ScreenTab3';

const ScreenTab = createBottomTabNavigator(
    // 配置 tab 路由
    {
        Home: { screen: Home}, 
        Recharge:{screen:Recharge},
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
            case "Recharge":
                return Recharge.headersFind;
            case "My":
                return My.headersFind;
    }
    return {
        headerTitle,
    };
};

export default ScreenTab;
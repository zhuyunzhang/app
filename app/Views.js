/**
 * ScreenBottomTab/index.js
 */
import  { createBottomTabNavigator } from 'react-navigation'

import Home from './home';
import My from './my';
import IconV from './icon';

const ScreenTab = createBottomTabNavigator(
    {
        Home: { screen: Home }, 
        My: { screen: My },
        IconV: { screen: IconV },
    }
);

ScreenTab.navigationOptions = ({ navigation }) => {
    const { routeName } = navigation.state.routes[navigation.state.index];
    switch(routeName){
        case "Home":
            console.log(Home.headersFind);
            return Home.headersFind;
        case "My":
            console.log(My.headersFind);
            return My.headersFind;
        default:
            return {routeName};
    };
};

export default ScreenTab;
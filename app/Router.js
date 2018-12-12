import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation'
import ScreenBottomTab from './Views';

export default class Router extends Component {
	render() {
		return(
			<App/>
		)
	}
};

const navigator = createStackNavigator({
	ScreenBottomTab: ScreenBottomTab,
})
const App = createAppContainer(navigator)
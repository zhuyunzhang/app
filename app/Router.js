import React, { Component } from 'react';

import Home from './home';
// import Home from './components/Home';

// import {StackNavigator} from 'react-navigation'; 

import { createStackNavigator, createAppContainer } from 'react-navigation'

export default class Router extends Component {
	render() {
		return(
			<App/>
		)
	}
};

import ScreenBottomTab from './Views';

const navigator = createStackNavigator({
	ScreenBottomTab: ScreenBottomTab,
})
  
const App = createAppContainer(navigator)


// const Navigator = StackNavigator({  
//     Home:{screen:Home}, 
// },{
// 	navigationOptions: {
// 		header: null
// 	}
// });  
/**
 * ScreenTab1/index.js
 */
import React, {Component} from 'react';
import {
  Image,
  Dimensions
} from 'react-native'

import SplashScreen from "react-native-splash-screen"; 
import view from './view';

var {height} =  Dimensions.get('window');

export default class ScreenHome extends Component {
  constructor(props) {
    super(props);
    this.navigation = props.navigation;
  }
  componentDidMount() {
    // 隐藏启动页，如果不设置消失时间，在组件加载完启动页自动隐藏
    setTimeout(() => {
      SplashScreen.hide();
    }, 3000);
  }
  static headersFind={
    headerTitle: '首页',
    headerStyle: {
      backgroundColor: '#48D1CC',
      height :height/15
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
      flex:1,
      textAlign: 'center'
    }
  };
  static navigationOptions = {
    title: '首页',
    tabBarIcon: ({ focused }) => {
      const icon = focused
        ? require('../../images/home.png')
        : require('../../images/home1.png');
      return <Image source={icon} style={{ height: 22, width: 22 }} />;
    },
  };
  render() {
    return view(this);
  }
}
/**
 * ScreenTab1/index.js
 */
import React, {Component} from 'react';
import {Image} from 'react-native'
import SplashScreen from "react-native-splash-screen"; 
import view from './view';

export default class ScreenHome extends Component {
  componentDidMount() {
    // 隐藏启动页，如果不设置消失时间，在组件加载完启动页自动隐藏
    setTimeout(() => {
      SplashScreen.hide();
    }, 3000);
  }
  static headersFind={
     title: '首页'
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

  constructor(props) {
    super(props);
    this.navigation = props.navigation;
  }

  render() {
    return view(this);
  }
}

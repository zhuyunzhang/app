import React, { Component } from 'react';
import { Image,Dimensions } from 'react-native';
import view from './view';

var {height,width} =  Dimensions.get('window');

export default class ScreenTab1 extends Component {
   static headersFind={
    headerTitle: '常用设备',
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
    title: '设备',
    tabBarIcon: ({ focused }) => {
      const icon = focused
          ? require('../../images/shebei.png')
        : require('../../images/shebei1.png');
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

import React, { Component } from 'react';
import { Image } from 'react-native';
import view from './view';

export default class ScreenTab1 extends Component {

  static navigationOptions = {
    title: '网络请求(TAB1)',
    tabBarIcon: ({ focused }) => {
      const icon = focused
          ? require('../../images/shebei1.jpg')
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

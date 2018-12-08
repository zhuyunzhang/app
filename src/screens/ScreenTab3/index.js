/**
 * ScreenTab1/index.js
 */
import React, {Component} from 'react';
import {Text, View, Button,Image} from 'react-native'

export default class ScreenSome1 extends Component {
  static headersFind={
     title: '个人'
  };
  static navigationOptions = {
    title: '我的',
     tabBarIcon: ({ focused }) => {
      const icon = focused
        ? require('../../images/geren.png')
        : require('../../images/geren1.png');
      return <Image source={icon} style={{ height: 22, width: 22 }} />;
    },
    
  };

  constructor(props) {
    super(props);
    this.navigation = props.navigation;
  }

  render() {
    return(
          <View>
	    <Text style={{ fontSize: 36 }}>TAB3</Text>
	  </View>
    );
  }
}

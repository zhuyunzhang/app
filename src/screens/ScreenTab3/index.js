/**
 * ScreenTab1/index.js
 */
import React, {Component} from 'react';
import {Text, View, Button,Image} from 'react-native'

export default class ScreenSome1 extends Component {
  static navigationOptions = {

    title: '个人',
     tabBarIcon: ({ focused }) => {
      const icon = focused
        ? require('../../images/geren1.jpg')
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

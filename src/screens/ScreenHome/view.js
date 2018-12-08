// 引入依赖
import React, {Component} from 'react';
import {Text, View, Button} from 'react-native'
import pxToDp from '../../config/pxToDp';

export default self => (
   <View>
    <Text style={{ fontSize: pxToDp(36) }}>home</Text>

    <Button title="goSome1" onPress={() => self.navigation.navigate('ScreenSome1')} />


    <Button title="goSome2Modal" onPress={() => self.navigation.navigate('ScreenSome2Modal')} />

    <Button
      title="webView"
      onPress={() =>
        self.navigation.navigate('ScreenWebView', {
          url: 'https://github.com/facebook/react-native',
          title: '加载中...',
        })
      }
    />
  </View>
);

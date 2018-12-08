// 引入依赖
import React, {Component} from 'react';
import {Text, View, Button} from 'react-native'

export default self => (
  <View>
    <Text style={{ fontSize: 36 }}>home</Text>
    <Button
      title="ScreenSome1"
      onPress={() => self.navigation.navigate("ScreenSome1")}
    />
  </View>
);

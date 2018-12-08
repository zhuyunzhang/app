/**
 * ScreenSome2/view.js
 * 自定义 header（关闭按钮）
 */
import React from 'react';
import { TouchableHighlight,Text,View } from 'react-native'
import pxToDp from '../../config/pxToDp';

export default self => (
  <View>
    <TouchableHighlight
      onPress={() => self.navigation.goBack()}
      underlayColor="transparent"
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: pxToDp(30),
        width: pxToDp(150),
        height: pxToDp(90),
        backgroundColor: "yellow"
      }}
    >
      <Text style={{ marginLeft: pxToDp(24) }}>关闭</Text>
    </TouchableHighlight>

    <Text style={{ fontSize: pxToDp(36) }}>some2，以 modal 的形式进入</Text>
  </View>

);
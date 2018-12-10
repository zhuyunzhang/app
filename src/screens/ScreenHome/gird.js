/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
 
import React, { Component } from 'react';
import {
  StyleSheet,
  ListView,
  TouchableOpacity,
  Image,
  Text,
  Alert,
  View,
  Dimensions
} from 'react-native';
//导入数据
import ShareData from "../../json/shareData.json";
//获取屏幕宽度
let {width} = Dimensions.get('window');
//常量设置
let cols = 3;
let cellWH =100;
let vMargin = (width-cellWH*cols)/(cols+1);
let hMargin = 25;
 
 
export default class gird extends Component {
 
 constructor(props){
  super(props);
  //1.设置数据源
  let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
  //2.设置返回数据
  this.state = {dataSource:ds.cloneWithRows(ShareData.data)};
  thiz = this;
 }
 
  render() {
    return (
     <ListView
      dataSource={this.state.dataSource}
      renderRow={this._renderRow}
      contentContainerStyle={styles.listViewStyle}
     />
    );
  }
 
  _renderRow(rowData){
     return(
    <TouchableOpacity activeOpacity={1} onPress={()=>{thiz._onPress(rowData.title)}}>
    <View style={styles.innerViewStyle}>
      <Image source={{uri:rowData.img}} style={styles.iconStyle}/>
      <Text>{rowData.title}</Text>
    </View>
    </TouchableOpacity>
    );
  }
 
  _onPress(e) {
 
    alert(">>>点击 "+e);
  }
 
}
 
 
const styles = StyleSheet.create({
  listViewStyle:{
    flexDirection:'row',
    flexWrap:'wrap',
    alignItems:'center',
  },
  iconStyle:{
    width:50,
    height:50,
  },
  innerViewStyle:{
   justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.2,
    borderColor: '#dddddd',
    width: width / 3,
    height: 70,
  }
});

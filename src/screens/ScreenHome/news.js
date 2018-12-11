

import React, { Component } from 'react';
import { Image,Dimensions,TouchableOpacity ,Alert,View} from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
const { width,height} = Dimensions.get('window')
export default class news extends Component {
  render() {
    return (
          <Card>
          	<TouchableOpacity  onPress={()=>{Alert.alert("安徽兴日智能科技有限公司!")}} >
	            <CardItem style={{height: 50}}>
	                <Left>
	                 	<Thumbnail source={require('../../images/padder.png')} style={{height: 40}}/>
	                	<Body>
		                  	<Text>兴日智能科技</Text>
		                   	<Text note>www.xrzn.cn</Text>
	                	</Body>
	              	</Left>
	              	<Right >
	              		<View>
		                  <Text>详情</Text>
		                </View>
	              	</Right>
	            </CardItem>
            </TouchableOpacity>
            <CardItem>
              	<Body>
                	<Image source={require('../../images/winter.png')} style={{height: height/7, width: width-40, flex: 1}}/>
                	<Text>
                  		安徽兴日智能科技有限公司是一家集智能卡产品研发、生产、销售为一体的高新技术企业
                	</Text>
              	</Body>
            </CardItem>
          </Card>
    );
  }
}
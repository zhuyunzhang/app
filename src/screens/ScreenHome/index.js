/**
 * ScreenTab1/index.js
 */
import React, {Component} from 'react';
import {
    Text,
    ScrollView,
    Image,
    View,
    Dimensions
} from 'react-native'

import SplashScreen from "react-native-splash-screen"; 

import Swiper from 'react-native-swiper'
import MarqueeLabel from 'react-native-lahk-marquee-label'
import Badges from './gird';
import Newes from './news';
import { Card,CardItem } from 'native-base';
const { width,height } = Dimensions.get('window')
var shareJson = require('../../json/shareData.json');

export default class ScreenHome extends Component {
  constructor(props) {
    super(props);
    this.navigation = props.navigation;
  }
  componentDidMount() {
    // 隐藏启动页，如果不设置消失时间，在组件加载完启动页自动隐藏
    setTimeout(() => {
      SplashScreen.hide();
    }, 3000);
  }
  static headersFind={
    headerTitle: '首页',
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
    title: '首页',
    tabBarIcon: ({ focused }) => {
      const icon = focused
        ? require('../../images/home.png')
        : require('../../images/home1.png');
      return <Image source={icon} style={{ height: 22, width: 22 }} />;
    },
  };
  render() {
    return (
        <ScrollView style={styles.container}>
           <Swiper style={styles.wrapper} height={height/5} autoplayTimeout={4} horizontal={true} autoplay={ true }>
              <View style={styles.slide1}>
                <Image resizeMode='stretch' style={styles.image} source={require('../../images/swiper1.png')} />
              </View>
              <View style={styles.slide2}>
                  <Image resizeMode='stretch' style={styles.image} source={require('../../images/swiper2.png')} />
              </View>
              <View style={styles.slide3}>
                <Image resizeMode='stretch' style={styles.image} source={require('../../images/swiper3.png')} />
              </View>
              </Swiper>
              <MarqueeLabel
                  duration={40000}
                  textContainerHeight={height/40}
                  text={'安徽兴日智能科技有限公司是一家集智能卡产品研发、生产、销售为一体的高新技术企业，公司专业从事计算机软件和智能卡硬件产品的开发技术服务，以智能卡控水器与智能卡水表产品为主导，不断创新、拓展，研发出IC卡管线饮水机刷卡主板、IC卡自助售水机投币刷卡主板、自助充值机、便携式充值机、智能卡自助充电站、洗衣机智能卡计费机等系列高端智能卡设备。'}
                  textStyle={{ fontSize: 13, color: 'red'}}
              />
              <Card >
                  <Badges />
              </Card>
             <Newes/>
        
        </ScrollView>
      )
  }
}
const styles = {
    container: {
        height:height/5,
    },

    wrapper: {
      width: width,
    },

    slide: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'transparent'
    },

    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB'
    },

    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5'
    },

    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9'
    },

    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
    },

    image: {
        width,
        height:200

    }
}

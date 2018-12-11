// 引入依赖
import React, { Component } from 'react'
import {
    Text,
    ScrollView,
    Image,
    View,
    Dimensions
} from 'react-native'
import Swiper from 'react-native-swiper'
import MarqueeLabel from 'react-native-lahk-marquee-label'
import Badges from './gird';
import Newes from './news';
import { Card,CardItem } from 'native-base';
const { width,height } = Dimensions.get('window')
var shareJson = require('../../json/shareData.json');

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

export default self => (

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
        <Card>
            <Badges/>
        </Card>
       <Newes/>
  
  </ScrollView>
);


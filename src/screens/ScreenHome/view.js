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
const { width,height } = Dimensions.get('window')

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
  </ScrollView>
);

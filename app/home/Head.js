import React, { Component } from 'react';
import {
    Image,
    Button,
    StyleSheet,
    Text,
    View,
    Dimensions
} from 'react-native';

var {height,width} =  Dimensions.get('window');
import Swiper from 'react-native-swiper'
import * as action from '../actions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as styles from './styles';

class HomeHead extends Component {

    componentDidMount() {
        // 隐藏启动页，如果不设置消失时间，在组件加载完启动页自动隐藏
    }

    render() {
        const { actions, state, navigation } = this.props;

        return (
            <View style={styles.headsty.container}>
                <Swiper style={styles.headsty.wrapper} height={height/5} autoplayTimeout={4} horizontal={true} autoplay={ true }>
                    <View style={styles.headsty.slide}>
                        <Image resizeMode='stretch' style={styles.headsty.image} source={require('./images/swiper1.png')} />
                    </View>
                    <View style={styles.headsty.slide}>
                        <Image resizeMode='stretch' style={styles.headsty.image} source={require('./images/swiper2.png')} />
                    </View>
                    <View style={styles.headsty.slide}>
                        <Image resizeMode='stretch' style={styles.headsty.image} source={require('./images/swiper3.png')} />
                    </View>
                </Swiper>
            </View>
        );
    }
}

export default connect(state => ({
	state: state.user
}), (dispatch) => ({
	actions: bindActionCreators(action.user, dispatch)
}))(HomeHead);
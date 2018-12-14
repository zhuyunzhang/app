import React, { Component } from 'react';
import {
    Image,
    View,
    Dimensions
} from 'react-native';
import { Button } from 'antd-mobile-rn';
import SplashScreen from "react-native-splash-screen"; 

var {height, width} =  Dimensions.get('window');

import * as action from '../actions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import Head from './Head';

class Home extends Component {

    componentDidMount() {
        // 隐藏启动页，如果不设置消失时间，在组件加载完启动页自动隐藏
        setTimeout(() => {
            SplashScreen.hide();
        }, 3000);
    }

    static headersFind={
        headerTitle: '首页',
        headerStyle: {
            backgroundColor: '#66CDAA',
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
            const icon = focused ? require('../images/home.png') : require('../images/home1.png');
            return <Image source={icon} style={{ height: 22, width: 22 }} />;
        },
    };
    
    constructor(props) {
        super(props);
        this.navigation = props.navigation;
    }

    render() {
        const { actions, state, navigation } = this.props;
        return (
            <View style={styles.container}>
                <Head props={this.props}/>
                <Button type="primary"/>
            </View>
        );
    }
}

export default connect(state => ({
	state: state.user
}), (dispatch) => ({
	actions: bindActionCreators(action.user, dispatch)
}))(Home);

const styles = {
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    }
};
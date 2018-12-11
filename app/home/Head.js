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

import * as action from '../actions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class HomeHead extends Component {

    componentDidMount() {
        // 隐藏启动页，如果不设置消失时间，在组件加载完启动页自动隐藏
    }

    render() {
        const { actions, state, navigation } = this.props;

        return (
            <View>
                <Text style={{color: "#000"}}>我是头</Text>
            </View>
        );
    }
}

export default connect(state => ({
	state: state.user
}), (dispatch) => ({
	actions: bindActionCreators(action.user, dispatch)
}))(HomeHead);
import React, { Component } from 'react';
import {
    Image,
    Button,
    StyleSheet,
    Text,
    View,
    Dimensions
} from 'react-native';

import SplashScreen from "react-native-splash-screen"; 
import { Container, Header, Tab, Tabs, TabHeading, Icon } from 'native-base';
import * as action from '../../../actions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Tab1 from './completelist';
import Tab2 from './uncompletelist';

var {height,width} =  Dimensions.get('window');
class RechargeList extends Component {

    componentDidMount() {
        // 隐藏启动页，如果不设置消失时间，在组件加载完启动页自动隐藏
        setTimeout(() => {
            SplashScreen.hide();
        }, 3000);
        const {actions, state} = this.props;
        actions.UserInfo(10001, null, null)
    }


    static navigationOptions = {
        title: '充值记录',
    };
    
    constructor(props) {
        super(props);
        this.navigation = props.navigation;
    }

    render() {
        const { actions, state, navigation } = this.props;
        var info = {};
        const {user_info} = state;
        if(user_info != null){
            info = user_info;
        }
        const onPressLearnMore = () => {
            alert(JSON.stringify(info))
        }

        return (
            <View style={styles.container}>
                <Tabs>
                  <Tab heading="已完成">
                    <Tab1 />
                  </Tab>
                  <Tab heading="未完成">
                    <Tab2 />
                  </Tab>
                </Tabs>
            </View>
        );
    }
}

export default connect(state => ({
    state: state.user
}), (dispatch) => ({
    actions: bindActionCreators(action.user, dispatch)
}))(RechargeList);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
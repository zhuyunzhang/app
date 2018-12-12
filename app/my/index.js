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

var {height,width} =  Dimensions.get('window');

import * as action from '../actions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class Home extends Component {

    componentDidMount() {
        // 隐藏启动页，如果不设置消失时间，在组件加载完启动页自动隐藏
        setTimeout(() => {
            SplashScreen.hide();
        }, 3000);
        const {actions, state} = this.props;
        actions.UserInfo(10001, null, null)
    }

    static headersFind={
        headerTitle: '我的',
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
        title: '我的',
        tabBarIcon: ({ focused }) => {
            const icon = focused ? require('../images/geren.png') : require('../images/geren1.png');
            return <Image source={icon} style={{ height: 22, width: 22 }} />;
        },
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
            // actions.UserInfo(10001, null, (s, d)=>{
            //     alert(s)
            // 	alert(d)
            // })
            // if (navigation) {
            //     this.props.navigation.navigate('Mine');
            // }
            alert(JSON.stringify(info))
        }

        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Welcome to 任务管理! HOME
                </Text>
                <Text style={styles.instructions} onClick={()=>{
                    console.log("hhh")
                }}>
                   {info.nick_name}
                </Text>
                <Button
                  onPress={onPressLearnMore}
                  title="Learn More"
                  color="#841584"
                  accessibilityLabel="Learn more about this purple button"/>
                <Text style={styles.instructions}>
                    Press Cmd+R to reload,{'\n'}
                    Cmd+D or shake for dev menu
                </Text>
            </View>
        );
    }
}

export default connect(state => ({
	state: state.user
}), (dispatch) => ({
	actions: bindActionCreators(action.user, dispatch)
}))(Home);

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
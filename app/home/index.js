import React, { Component } from 'react';
import {
    Image,
    View,
    Text,
    Dimensions
} from 'react-native';
import { Grid, Popover } from 'antd-mobile-rn';
import SplashScreen from "react-native-splash-screen"; 
import { IconFill, IconOutline } from "@ant-design/icons-react-native";

const data = Array.from(new Array(8)).map((_val, i) => ({
    icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
    text: `name${i}`,
}));

import * as action from '../actions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Head from './Head';
import PopoverView from './PopoverView';

const Item = Popover.Item;
const {height, width} =  Dimensions.get('window');
const myImg = src => <img src={`https://gw.alipayobjects.com/zos/rmsportal/${src}.svg`} className="am-icon am-icon-xs" alt="" />;
const self = this;
class Home extends Component {
    componentDidMount() {
        // 隐藏启动页，如果不设置消失时间，在组件加载完启动页自动隐藏
        setTimeout(() => {
            SplashScreen.hide();
        }, 3000);
    }
    
    static headersFind={
        headerTitle: '首页',
        headerRight:(
            <View style={{marginRight: 5}}>
                {/* <IconOutline name={"ellipsis"} color="#FFF" size={30}/> */}
                <PopoverView/>
            </View>
        ),
        headerStyle: {
            backgroundColor: '#108ee9',
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
    
    onChange = (value) => {
        this.setState({ value });
    }

    constructor(props) {
        super(props);
        this.state = {
            visible: true,
            selected: '',
        };
        // this.navigation = props.navigation;
    }

    render() {
        const { actions, state, navigation } = this.props;
        return (
            <View>
               
                <Head/>
                <Grid data={data} activeStyle={false} hasLine={false}/>
                
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
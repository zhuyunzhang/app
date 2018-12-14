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

import * as action from '../../actions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { Col, Row, Grid } from 'react-native-easy-grid';

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
            const icon = focused ? require('../../images/geren.png') : require('../../images/geren1.png');
            return <Image source={icon} style={{ height: 22, width: 22 }} />;
        },
    };
    
    constructor(props) {
        super(props);
        this.navigation = props.navigation;
    }

    render() {

        return (
            <View>
                <Grid>
                    <Col style={{ backgroundColor: '#635DB7', height: 200 ,margin:8}}>
                        <Text>1</Text>
                    </Col>
                    <Col style={{ backgroundColor: '#00CE9F', height: 200 ,margin:8}}>
                        <Row style={{ backgroundColor: 'red' }}>
                            <Text>2</Text>
                        </Row>
                        <Row style={{ backgroundColor: 'blue'}}>
                            <Text>3</Text>
                        </Row>
                    </Col>
                </Grid>
            </View>  
        );
    }
}

export default connect(state => ({
	state: state.user
}), (dispatch) => ({
	actions: bindActionCreators(action.user, dispatch)
}))(Home);

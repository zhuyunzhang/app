import React, { Component } from 'react';
import {
    Image,
    StyleSheet,
    View,
    Dimensions,
    ScrollView,
    TouchableOpacity,
    StatusBar 
} from 'react-native';

import SplashScreen from "react-native-splash-screen"; 

var {height, width} =  Dimensions.get('window');

import * as action from '../../actions';
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
        // headerRight:(
        //     <View style={{marginRight:30/1536*width}}>
        //         <TouchableOpacity onPress={() =>this.props.navigation.navigate("Scanning")}>
        //             <Image source={require('./images/sys1.png')} style={{width: 21.5/600*width*2,height: 20.5/600*width*2}} />
        //         </TouchableOpacity>
        //     </View>
        // )
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
    constructor(props) {
        super(props);
        this.navigation = props.navigation;
    }

    render() {
        const { actions, state, navigation } = this.props;
        return (
            <ScrollView style={styles.containers}>
                 <StatusBar
                  backgroundColor={'#66CDAA'}
                  />
                <Head props={this.props}/>
            </ScrollView>
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
        backgroundColor: '#F5FCFF',
    }
});
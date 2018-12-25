
import React from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    processColor,
    Dimensions
} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as action from '../../../actions';
import {PieChart} from 'react-native-charts-wrapper';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Icon } from 'native-base';
const { width, height } = Dimensions.get('window');
class WalletInfo extends React.Component {

    constructor() {
        super();
        this.state={
            values:[{value: 0, label: '充值'}],
            pay_count:"0",
        }
    }

    componentDidMount() {
        // 隐藏启动页，如果不设置消失时间，在组件加载完启动页自动隐藏
        const {actions, state} = this.props;
        actions.GetWalletInfo(10001,null)
    }
    static navigationOptions = {
        headerStyle: {
            backgroundColor: '#66CDAA'
        },
    };

    render() {
        const { actions, state, navigation } = this.props;
        var walletinfo = {};
        const {wallet_info} = state;
        if(wallet_info != null){
        walletinfo = wallet_info;
        }
        if (JSON.stringify(walletinfo.content)==undefined){
            walletinfo.content=this.state.values;
            walletinfo.pay_count=this.state.pay_count
        }
        var walletData={
            data: {
                dataSets: [{
                    values:walletinfo.content,
                    label: '',
                    config: {
                        valueTextSize: 14,
                        valueTextColor:processColor('#0F0F0F'),
                        valueFormatter: 'largeValue',
                        colors: [processColor('#1C86EE'), processColor('red'),processColor('#41babc'),processColor('#EE1289'),processColor('#98FB98')]
                      }
                }],
            },
            description: {
                text: ''

            },
            legend: {
                enabled: false,
                textSize: 15,
                form: 'CIRCLE',
                horizontalAlignment: "RIGHT",
                verticalAlignment: "CENTER",
                orientation: "VERTICAL",
                wordWrapEnabled: true
              }
        };
        return (
            <View style={{flex: 1}}>
                <View style={styles.containers}>
                    <Text style={styles.textStyle}>中国石油大学</Text>
                    <Text style={styles.textStyles}>钱包 No.1231123323</Text>
                </View>
                <View style={{height:height/12}}></View>
                <View>
                    <PieChart
                        style={{ height: width * 0.6}}
                        logEnabled={true}
                        data={walletData.data}
                        legend={walletData.legend}
                        drawEntryLabels={true}
                        rotationEnabled={true}
                        usePercentValues={false}
                        rotationAngle={0}
                        styledCenterText={{
                            text:walletinfo.pay_count+"元",
                            color: processColor('#7f7f7f'),
                            size: 19
                        }}
                        chartDescription={walletData.description}
                        rotationAngle={162}
                        centerTextRadiusPercent={400}
                        holeRadius={45}
                        transparentCircleColor={processColor('#FFF')}
                        maxAngle={360}
                    />
                </View>
                <View style={{height:height/12}}></View>
                <View>
                    <Grid>
                        <Col style={styles.col1}>
                            <Icon name='cart' style={{ color: 'red',textAlign:'center', justifyContent:'center',marginLeft:40}}/>
                            <Text style={{textAlign:'center', justifyContent:'center',marginLeft:40,fontSize:14}}>充值</Text>
                        </Col>
                        <View style={{ height: height/13,width:1,backgroundColor:'red'}}></View>
                        <Col style={styles.col2}>
                            <Icon name='card' style={{color: '#6495ED',textAlign:'center', justifyContent:'center'}}/>
                            <Text style={{textAlign:'center', justifyContent:'center',fontSize:14}}>卡片</Text>
                        </Col>
                        <View style={{ height: height/13,width:1,backgroundColor:'red'}}></View>
                        <Col style={styles.col1}>
                            <Icon name='paper' style={{color: '#9400D3',textAlign:'center', justifyContent:'center',marginRight:40}}/>
                            <Text style={{textAlign:'center', justifyContent:'center',marginRight:40,fontSize:14}}>记录</Text>
                        </Col>
                    </Grid>
                </View>
                 <View style={{marginTop:80}}>
                    <Grid>
                        <Col style={styles.col1}>
                            <Icon name='arrow-back' style={{ color: 'red',textAlign:'center', justifyContent:'center',marginLeft:40}}/>
                            <Text style={{textAlign:'center', justifyContent:'center',marginLeft:40,fontSize:14}}>回退</Text>
                        </Col>   
                        <Col style={styles.col1}>
                            <Icon name='home' style={{color: '#6495ED',textAlign:'center', justifyContent:'center'}}/>
                            <Text style={{textAlign:'center', justifyContent:'center',fontSize:14}}>首页</Text>
                        </Col>
                    </Grid>
                </View>
            </View>
        );
    }
}

export default connect(state => ({
    state: state.user
}), (dispatch) => ({
    actions: bindActionCreators(action.user, dispatch)
}))(WalletInfo);
const styles = StyleSheet.create({
    containers:{
        height:height/6,
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor:'#66CDAA'
    },
    textStyle:{
        fontSize:26,
        textAlign:'center',   
        justifyContent: 'center',
        backgroundColor:'#66CDAA',
        color:'#FFFFFF'
    },
    textStyles:{
        fontSize:14,
        textAlign:'center',   
        justifyContent: 'center',
        backgroundColor:'#66CDAA'
    },
    col1:{

        height: height/13 ,
        textAlign:'center',   
        justifyContent: 'center',
    },
    col2:{
        textAlign:'center',   
        justifyContent: 'center',

        height: height/13 ,
        width:100
    },    
/*    col3:{
       fontSize:14,
       textAlign:'center',   
       justifyContent: 'center',
       backgroundColor:'#66CDAA'
    }*/
});
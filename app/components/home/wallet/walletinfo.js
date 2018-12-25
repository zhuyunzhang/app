
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
const { width, height } = Dimensions.get('window');
class WalletInfo extends React.Component {

    constructor() {
        super();
        this.state={
            values:[{value: 20, label: '补贴'},{value: 80, label: '充值'}],
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
            walletinfo.content=this.state.values
          
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
                        <Col style={{ backgroundColor: '#635DB7', height: height/13 ,margin:2}}>
                            <Text>1</Text>
                        </Col>
                        <Col style={{ backgroundColor: '#00CE9F', height: height/13 ,margin:2}}>
                             <Text>2</Text>
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
    }
});
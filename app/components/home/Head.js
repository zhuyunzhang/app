import React, { Component } from 'react';
import {
    Image,
    StyleSheet,
    Text,
    View,
    Dimensions,
    TouchableOpacity,
    Alert
} from 'react-native';

var {height,width} =  Dimensions.get('window');
import Swiper from 'react-native-swiper'
import MarqueeLabel from 'react-native-lahk-marquee-label'
import * as action from '../../actions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as styles from './styles';
import Badges from './gird';
import Newes from './news';
import { Card,CardItem ,Button,Container, Content, Thumbnail, Left, Body, Right} from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

class HomeHead extends Component {
    constructor(props) {
        super(props);
        this.state = {
          active:true
        };
    }

    componentDidMount() {
        // 隐藏启动页，如果不设置消失时间，在组件加载完启动页自动隐藏
    }

    render() {
        const { actions, state, navigation } = this.props;

        return (
            <View>
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
                <MarqueeLabel
                  duration={40000}
                  textContainerHeight={height/40}
                  text={'安徽兴日智能科技有限公司是一家集智能卡产品研发、生产、销售为一体的高新技术企业，公司专业从事计算机软件和智能卡硬件产品的开发技术服务，以智能卡控水器与智能卡水表产品为主导，不断创新、拓展，研发出IC卡管线饮水机刷卡主板、IC卡自助售水机投币刷卡主板、自助充值机、便携式充值机、智能卡自助充电站、洗衣机智能卡计费机等系列高端智能卡设备。'}
                  textStyle={{ fontSize: 13, color: 'red'}}
                />
                <Card >
                    <Badges props={this.props.props}/>
                </Card >
                <Grid>
                    <Col style={{ backgroundColor: '#635DB7', borderRadius: 5, height: height/8 ,margin:8}}>
                        <Card style={{ height: height/9}}>
                            <TouchableOpacity  onPress={()=>{Alert.alert("充值记录!")}} >
                                <CardItem style={{height: 10}}>
                                    <Left>
                                        <Text>充值记录</Text>
                                    </Left>
                                    <Right >
                                        <Text style={{color:"#4876FF"}}>详情</Text>
                                    </Right>
                                </CardItem>
                            </TouchableOpacity>
                            <CardItem cardBody>
                                <Image source={require('./images/vipcard.png')} roundAsCircle={true} resizeMode='stretch' style={{height: height/12,width:width/2-22}} />
                            </CardItem>
                        </Card>
                    </Col>
                    <Col style={{ backgroundColor: 'red', borderRadius: 5, height: height/8,margin:8}}>
                        <Card style={{ height: height/9}}>
                            <TouchableOpacity  onPress={()=>{Alert.alert("消费记录!")}} >
                                <CardItem style={{height: 10}}>
                                    <Left>
                                        <Text>消费记录</Text>
                                    </Left>
                                    <Right >
                                        <Text style={{color:"#4876FF"}}>详情</Text>
                                    </Right>
                                </CardItem>
                            </TouchableOpacity>
                            <CardItem cardBody>
                                <Image source={require('./images/xiaofei.png')} roundAsCircle={true} resizeMode='stretch' style={{height: height/12,width:width/2-22}} />
                            </CardItem>
                        </Card>
                    </Col>
                   {/* <Col style={{  borderRadius: 5, height: height/5 ,margin:8}}>
                        <Row style={{ backgroundColor: 'red', borderRadius: 5}}>
                            <Text>2</Text>
                        </Row>
                        <Row style={{ backgroundColor: 'blue', borderRadius: 5}}>
                            <Text>3</Text>
                        </Row>
                    </Col>*/}
                </Grid>
                <Newes/>
            </View>
        );
    }
}
export default connect(state => ({
	state: state.user
}), (dispatch) => ({
	actions: bindActionCreators(action.user, dispatch)
}))(HomeHead);
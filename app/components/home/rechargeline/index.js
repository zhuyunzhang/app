import React, { Component } from 'react';
import {
    Image,
    Button,
    StyleSheet,
    Text,
    View,
    Dimensions,
    TouchableOpacity,
    Alert
} from 'react-native';
// import SplashScreen from "react-native-splash-screen"; 
import * as action from '../../../actions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { H3} from 'native-base';
var {height,width} =  Dimensions.get('window');

class Recharge extends Component {
  constructor(props){
    super(props);
  }
  componentDidMount(){
   
  }

  render() {
    return (
      <View>
        <H3 style={{marginTop:5,marginLeft:16}}>在线充值</H3>
        <Grid>
          <Col style={styles.cols}>
            <Row style={styles.rows}>
                <Text>10</Text>
            </Row>
              <Row style={styles.rows}>
                <Text>50</Text>
              </Row>
            <Row style={styles.rows}>
                <Text>300</Text>
            </Row>
          </Col>
          <Col style={styles.cols}>
            <Row style={styles.rows}>
                <Text>20</Text>
            </Row>
            <Row style={styles.rows}>
                <Text>100</Text>
            </Row>
            <Row style={styles.rows}>
                <Text>500</Text>
            </Row>
          </Col>
          <Col style={styles.cols}>
            <Row style={styles.rows}>
                <Text>30</Text>
            </Row>
            <Row style={styles.rows}>
                <Text>200</Text>
            </Row>
            <Row style={styles.rows}>
                <Text>其他</Text>
            </Row>
          </Col>
        </Grid>
      </View>  
    );
  }
  // onRead = (res) => {
  //   alert(JSON.stringify(res));
  // }
}

export default connect(state => ({
  state: state.user
}), (dispatch) => ({
  actions: bindActionCreators(action.user, dispatch)
}))(Recharge);
const styles = StyleSheet.create({
  rows: {
    borderWidth:1,
    borderRadius: 5,
    margin:4,
    borderColor:'#4876FF'
  },
  cols: {
     height: 210 ,
     margin:8
  }
});
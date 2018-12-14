//XINGRI-0Q5OGRE2\Administrator
import React, { Component } from 'react';
import { 
    Alert,
    View, 
    Text, 
    TouchableOpacity, 
    StyleSheet,
    Image
} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as action from '../../actions';
import { Col, Row, Grid } from 'react-native-easy-grid';

 class easygrid extends Component {
    constructor(props){
      super(props);
      this.navigation = props.navigation;
    }
    componentDidMount() {
        // 隐藏启动页，如果不设置消失时间，在组件加载完启动页自动隐藏
    }
    render() {
       
        return (
            <View>
                <Grid>
                    <Col style={styles.col1}>
                        <Text>1</Text>
                    </Col>
                    <Col style={styles.col2}>
                        <Row style={styles.row1}>
                            <Text>2</Text>
                        </Row>
                        <Row style={styles.row2}>
                            <Text>3</Text>
                        </Row>
                    </Col>
                </Grid>
            </View>  
        )}

};

export default connect(state => ({
    state: state.user
}), (dispatch) => ({
    actions: bindActionCreators(action.user, dispatch)
}))(easygrid);

const styles = StyleSheet.create({
    col1: {
        backgroundColor: '#635DB7', 
        height: 200 ,
        margin:8
    },
    col2: {
        height: 200 ,
        margin:8
    },
    row1: {
        backgroundColor: 'blue'
    },
    row2: {
        backgroundColor: 'red'
    }

})

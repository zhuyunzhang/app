import React, { Component } from 'react';
import {
    Platform,
    Text,
    Image,
    StyleSheet,
    View,
    ViewStyle,
    Dimensions
} from 'react-native';
// import { Platform, StyleSheet, Text, View, ViewStyle } from 'react-native';
import { Popover } from 'antd-mobile-rn';
import { IconOutline } from "@ant-design/icons-react-native";

const Item = Popover.Item;
const {height, width} =  Dimensions.get('window');
const myImg = src => <Image src={`https://gw.alipayobjects.com/zos/rmsportal/${src}.svg`} className="am-icon am-icon-xs" alt="" />;

class PopoverView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: true,
            selected: '',
        };
    }
    render() {
        const onSelect = (value) => {
            this.setState({
                selected: value
              });
          };
        const handleVisibleChange = (visible) => {
            this.setState({
                visible,
            });
        };
        let overlay = ["扫一扫", "帮助", 3].map((i, index) => (
            <Item key={index} value={`option ${i}`}>
                
            </Item>
        ));
        return(
            <View style={styles.container}>
                <View style={styles.arrowOuter}/>
                <Popover
                    name="m"
                    style={styles.popoverStyle}
                    overlay={overlay}
                    contextStyle={styles.contextStyle}
                    overlayStyle={[
                        styles.overlayStyle,
                        Platform.OS === 'android' && styles.androidOverlayStyle,
                    ]}
                    triggerStyle={styles.triggerStyle}
                    onSelect={onSelect}>
                        <IconOutline name={"ellipsis"} color="#FFF" size={30}/>
                </Popover>
            </View>
        )
    }
}

export default PopoverView;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgb(43, 186, 180)',
    },
    popoverStyle: {
        
        marginTop: 0.5,
    },
    contextStyle: {
        
    },
    arrowOuter: { 
        margin: 0,
        padding:0,
        width: 0,
        height:0,
        borderBottomWidth:10,
        borderBottomColor: "#FFF",
        borderLeftWidth:10,
        borderRightColor: "transparent",
        borderLeftColor: "transparent",
        borderRightWidth:10, /*制作上三角*/
	},
    overlayStyle: {
        borderRadius: 5,
        width:120
    },
    triggerStyle: {
        flexDirection: 'row',
        paddingHorizontal: 10,
    },
    androidOverlayStyle: {
        borderWidth: 1,
        borderColor: '#ccc'
    },
  });
  
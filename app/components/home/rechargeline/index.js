//XINGRI-0Q5OGRE2\Administrator
import React, { Component } from 'react';
import { 
    Dimensions, 
    SafeAreaView,
    SectionList, 
    FlatList,
    Alert,
    View, 
    Text, 
    TouchableOpacity, 
    StyleSheet,
    Image,
    Navigator
} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as action from '。../../../actions';
const { width, height } = Dimensions.get('window');

const numColumns = 3;

 class RechargeLine extends Component {
    constructor(props){
      super(props);
      this.navigation = props.navigation;
    }
    componentDidMount() {
        // 隐藏启动页，如果不设置消失时间，在组件加载完启动页自动隐藏
    }
    render() {
        const data = [{
            content: [
                { key:1,money: '10元', title: '赠送2元'},
                { key:2,money: '30元', title: '赠送7元'},
                { key:3,money: '50元', title: '赠送12元'},
                { key:4,money: '100元', title: '赠送20元'},
                { key:5,money: '300元', title: '赠送70元'},
                { key:6,money: '500元', title: '赠送120元'},
            ],
            img: 'content',
        }];
        return (
            <SafeAreaView style={styles.container}>
                <SectionList
                    sections={[{data}]}
                    renderItem={this._renderSectionItem}
                    keyExtractor={this._keyExtractor}
                    />
            </SafeAreaView>
        )
    }

    _keyExtractor = (item, index) => {
        return item.img;
    }


    _renderItem = ({item}) => {
        return (
            <TouchableOpacity 
                activeOpacity={0.7}
                style={styles.item}
                 onPress={() => this.onPressImage(item.key,item.title)}
            >
              <Text style={styles.itemText1}>{item.money}</Text>
              <Text style={styles.itemText2}>{item.title}</Text>
            </TouchableOpacity>
        )
    }
    onPressImage(keys,title) {
        if(keys===1){
            const{navigation}=this.props
            if(navigation){
                navigation.navigate('Scanning') 
            }
        }else if(keys===4){
            const{navigation}=this.props
            if(navigation){
                navigation.navigate('Recharge') 
            }
        }else{
            alert("==>"+title)
        }
        
    }
    _renderSectionItem = ({section}) => {
        return (
            <FlatList
                data={section.data[0].content}
                numColumns={numColumns}
                renderItem={this._renderItem}
                style={{backgroundColor: '#fff', borderRadius:5}}
                scrollEnabled={false}
            />
        )
    }
};

export default connect(state => ({
    state: state.user
}), (dispatch) => ({
    actions: bindActionCreators(action.user, dispatch)
}))(RechargeLine);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    item: {
        backgroundColor: '#F5FCFF',
        width: (width-48)/numColumns,
        height: 60,  
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius:5,
        borderWidth:1,
        margin:8,
        borderColor:'#6495ED'
    },
    itemText1: {
        fontSize: 16,
        color:'#6495ED'
    },
    itemText2: {
        fontSize: 12,
        color:'#87CEFA'
    }

})

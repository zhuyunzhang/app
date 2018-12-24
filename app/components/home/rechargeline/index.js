//XINGRI-0Q5OGRE2\Administrator
import React, { Component } from 'react';
import { 
    Dimensions, 
    SectionList, 
    FlatList,
    Alert,
    View, 
    Text, 
    TouchableOpacity, 
    StyleSheet,
    Image,
    Modal,
    TextInput,
    TouchableHighlight
} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as styleas from '../styles';
import * as action from '../../../actions';
import { Card,CardItem ,Button,Container, Content, Thumbnail, Left, Body, Right,Picker ,Form,Item,H3} from 'native-base';
const { width, height } = Dimensions.get('window');
let dialogWidth = width-80;

const numColumns = 3;
var walletdata = [
    {
        "title": "钱包1",
        "walleid": 12,
        "id":0,
        "walletmon":"80"
    },
    {
        "title": "钱包2",
        "id":1,
        "walleid": 13,
        "walletmon":"100"        
    }
]
class RechargeLine extends Component {
    constructor(props){
      super(props);
      this.navigation = props.navigation;
      this.state = {
            modalVisible: false,
            keys:0,
            moneys:0,
            selected2: undefined,
            walletmoney:undefined
        };
    }
    componentDidMount() {
        // 隐藏启动页，如果不设置消失时间，在组件加载完启动页自动隐藏
        const {actions, state} = this.props;
        actions.GetProducts(10001,null)
        this.setState({
          walletmoney: walletdata[0].walletmon
        });
    }
    onValueChange2(value: string,keys:string) {
        var index =parseInt(keys)
        this.setState({
          selected2: value,
          walletmoney:walletdata[index].walletmon
        });
    }
    static navigationOptions = {
        headerStyle: {
            backgroundColor: '#66CDAA'
        },
    };
    setModalVisible(visible,keies,moneies) {
        this.setState({
            modalVisible: visible,
            keys:keies,
            moneys:moneies
        });
    }

    onClose() {
        this.setState({modalVisible: false});
    }
    render() {

        const { actions, state, navigation } = this.props;
        var productsinfo = {};
        const {products_info} = state;
        if(products_info != null){
            productsinfo = products_info;
        }
        const data = [];
        data.push(productsinfo)
        var WalletItem = (item, i) => {
            return(
                <Picker.Item label={item.title} value={item.id}/>
            )
        }
        return (
            <View style={styles.container}>
                <View style={{height:height/12,backgroundColor:'#66CDAA'}}></View>
                <View style={styleas.headsty.slide}>
                    <Image resizeMode='stretch' style={styleas.headsty.image} source={require('../images/chongzhip.png')} />
                </View>
                <View>
                    <Form>
                        <Item picker>
                            <Picker
                                mode="dropdown"
                                style={{marginLeft:10}}
                                placeholder="请选择你的钱包"
                                placeholderStyle={{ color:"#bfc6ea" }}
                                placeholderIconColor="#007aff"
                                selectedValue={this.state.selected2}
                                onValueChange={this.onValueChange2.bind(this)}
                                >
                                {walletdata.map(WalletItem)}
                            </Picker>
                        </Item>
                    </Form>                       
                </View>
                <H3 style={{margin:10}}>在线充值</H3>
                <SectionList
                    sections={[{data}]} 
                    renderItem={this._renderSectionItem}
                    keyExtractor={this._keyExtractor}
                    />
                <View style={{marginTop: 22}}>
                    <Modal
                        animationType={"slide"}
                        transparent={true}
                        visible={this.state.modalVisible}
                        onRequestClose={() => {this.setModalVisible(false,0,0)}}
                    >
                        <TouchableOpacity style={{flex:1}} onPress={this.onClose.bind(this)}>
                            <View style={stylees.container}>
                                <View style={stylees.innerContainer}>
                                    <H3>在线充值</H3>
                                    <View style={ {flexDirection:'row',height:80,marginTop:10}}>
                                        <TouchableOpacity onPress={() => this.onPressImage(this.state.keys,this.state.moneys)}>
                                            <View style={ {flex:1,margin:20 }}>
                                                <Image source={require('../images/alipay.png')} style={{height: 60,width:60,alignSelf:'center'}}/>
                                            </View>
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={() => this.onPressImage(this.state.keys,this.state.moneys)}>
                                            <View style={ {flex:1,margin:20 }}>
                                                <Image source={require('../images/weipay.png')} style={{height: 60,width:60,alignSelf:'center'}}/>
                                            </View>
                                        </TouchableOpacity>          
                                    </View>
                                    <View style={stylees.btnContainer}>
                                        <TouchableHighlight onPress={() => {
                                            this.setModalVisible(!this.state.modalVisible,0,0);
                                        }}>
                                            <Text  style={stylees.hidemodalTxt}>关闭</Text>
                                        </TouchableHighlight>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </Modal>
                </View>
            </View>
        )
    }

    _keyExtractor = (item, index) => {
        return item.img;
    }


    _renderItem = ({item}) => {
        return (
            <TouchableOpacity 
                activeOpacity={0.3}
                style={styles.item}
                 onPress={() => {
                    this.setModalVisible(true,item.key,item.money)
                }}
            >
              <Text style={styles.itemText1}>{item.money}元</Text>
              <Text style={styles.itemText2}>赠送{item.title}元</Text>
            </TouchableOpacity>
        )
    }
    onPressImage(keys,title) {
        alert(keys+"========>>>>>"+title);       
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
const stylees = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 40,
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
    innerContainer: {
        borderRadius: 10,
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 20

    },
    btnContainer:{
        width:dialogWidth,
        borderTopWidth:1,
        borderTopColor:'#777',
        alignItems:'center'
    },
    inputtext:{
        width:dialogWidth-20,
        margin:10,
    },
    hidemodalTxt: {
        marginTop:10,
    },
});

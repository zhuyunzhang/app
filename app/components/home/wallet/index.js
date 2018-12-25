//XINGRI-0Q5OGRE2\Administrator
import React, { Component } from 'react';
import { 
    Dimensions, 
    Alert,
    View, 
    Text, 
    TouchableOpacity, 
    StyleSheet,
    Image,
    TouchableHighlight
} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as styleas from '../styles';
import * as action from '../../../actions';
import RefreshListView, { RefreshState } from "react-native-refresh-list-view";
import { H3,Card, CardItem, Thumbnail, Button, Icon, Left,Right, Body} from 'native-base';
const { width, height } = Dimensions.get('window');
let dialogWidth = width-80;

const numColumns = 3;
class Wallet extends Component {
    constructor(props){
     	super(props);
      	this.navigation = props.navigation;
       	this.state = {
       		dataValue: [],
       		page: 0,
        	refreshState: RefreshState.Idle,
    	}
    }
    componentDidMount() {
        // 隐藏启动页，如果不设置消失时间，在组件加载完启动页自动隐藏
      this.setState({
      page: 0,
      refreshstate: RefreshState.HeaderRefreshing
    });
    fetch(`http://192.168.22.10:8616/agent/10001/lower/order/list/0?pageindex=0&pagesize=2`)
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          dataValue: responseJson.data,
          refreshstate: RefreshState.Idle,
          page: this.state.page + 1
        });
      })
      .catch(error => {
        this.setState({
          refreshstate: RefreshState.Failure
        });
      });
    }
    static navigationOptions = {
        headerStyle: {
            backgroundColor: '#66CDAA'
        },
    };
   HeaderRefresh = () => {
    this.setState({
      page: 0,
      refreshstate: RefreshState.HeaderRefreshing
    });
    fetch(`http://192.168.22.10:8616/agent/10001/lower/order/list/0?pageindex=0&pagesize=2`)
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          dataValue: responseJson.data,
          refreshstate: RefreshState.Idle,
          page: this.state.page + 1
        });
      })
      .catch(error => {
        this.setState({
          refreshstate: RefreshState.Failure
        });
      });
  };

  	FooterRefresh = () => {
    this.setState({
      refreshstate: RefreshState.FooterRefreshing
    });
    fetch(
      `http://192.168.22.10:8616/agent/10001/lower/order/list/0?pageindex=${
        this.state.page
      }&pagesize=2`
    )
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          dataValue: [...this.state.dataValue, ...responseJson.data],
          refreshstate: RefreshState.Idle,
          page: this.state.page + 1
        });
      })
      .catch(error => {
        this.setState({
          refreshstate: RefreshState.Failure
        });
      });
  };
  	onPressWallet(key) {
  		alert(key)
    }

    render() {	
        const { actions, state, navigation } = this.props;
        var walletinfo = {};
        const {wallet_info} = state;
        if(wallet_info != null){
            walletinfo = wallet_info.data;
        }
       
        return (
            <View style={styles.container}>
            	<View style={styles.containers}>
                    <Text style={styles.textStyles}>我的钱包</Text>
                </View>
                <RefreshListView
		          style={{ flex: 1 }}
		          data={this.state.dataValue}
		          renderItem={({ item }) => (
	            <TouchableHighlight
	              onPress={() => {
	                this.props.navigation.navigate("Web", {
	                  content: item.content
	                });
	              }}
	            >
	                <Card style={{marginLeft:16,marginRight:16,marginBottom:25}}>
			          	<TouchableOpacity  onPress={() => this.onPressWallet(item.pay_money)} >
				            <CardItem style={{height: 50}}>
				                <Left>
				                	<Body>
					                  	<Text>中国石油大学</Text>
				                	</Body>
				              	</Left>
				              	<Right >
				              		<Body>
					                  	<Text style={{color:'#6495ED',fontSize:16}}>钱包详情</Text>
					                </Body>
				              	</Right>
				            </CardItem>
			            
			                <CardItem  style={{height:height/5.5}}>
			                	<Left>
			                		<View >
			                			<Text style={{backgroundColor:'#5CACEE',width:width/2.5}}></Text>
			                  		</View>
			                	</Left>
			                  	<Right >
				              		<View>
					                  <Text style={{color:'red',fontSize:20}}>￥{item.pay_money}</Text>
					                </View>
				              	</Right>
			                </CardItem>
			                <CardItem >
			                  	<Left >
				              		<Body>
					                  <Text>No.12311123345</Text>
					                </Body>
				              	</Left>
			                </CardItem>	
			            </TouchableOpacity>   		                
		          	</Card>
	            </TouchableHighlight>
	          )}
	          refreshState={this.state.refreshstate}
	          onFooterRefresh={this.FooterRefresh}
	          onHeaderRefresh={this.HeaderRefresh}
	        />
        </View>
        )
    }
};

export default connect(state => ({
    state: state.user
}), (dispatch) => ({
    actions: bindActionCreators(action.user, dispatch)
}))(Wallet);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    containers:{
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor:'#66CDAA',
        height:height/5
    },
    textStyles:{
       fontSize:24,
       textAlign:'center',   
       justifyContent: 'center',
       color:'#FFFFFF'
    }

})

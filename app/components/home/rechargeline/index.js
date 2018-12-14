//XINGRI-0Q5OGRE2\Administrator
import React, { Component } from 'react';
import { 
    Alert,
    View, 
    Text, 
    TouchableOpacity, 
    StyleSheet,
    Image,
    ListView,
    Left,
    ListItem,
    Container,
    Content
} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as action from '../../../actions';
import { Col, Row, Grid } from 'react-native-easy-grid';

var mSelectWhat = -1;
var ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 }); //当且仅当cell中的任意两行不相等时才重新渲染\

 class Rechargeline extends Component {
      constructor(props) {
        super(props);
        this.state = {
            isShowSearch: false,  //是否显示搜索框                          
            dataSource: ds.cloneWithRows([])
        };
        this.checkedArr = []
    }
    static propTypes = {
        //属性
    };
    static defaultProps = {
        //属性默认值
    };
 
    componentWillMount() {
        GesstDesignTeam((success) => { // 1处 服务接口获取数据
            LetAll = success.result;
            alert(success.result)
            success.result.map((o, i) => {
 
                if (!this.props.mID) { 识别第二次进来的参数是否有点击过
                    LetAll[i]['isCheck'] = false;
                } else {
                    if (this.props.mID == o.user_id) { //判断点击了谁
                        LetAll[i]['isCheck'] = true;
                    } else {
                        LetAll[i]['isCheck'] = false;
                    }
                }
 
            })
            this.setState({ dataArr: ds.cloneWithRows(LetAll) })
        })
    }
    onBack() {
        if (this.props.getname) {
            //回调传值给上个页面
            this.props.getname(mSelectWhat != -1 ? LetAll[mSelectWhat] : []);
        }
        this.props.navigator.pop();
    }
 
    changeSearch() {
        this.setState({ isShowSearch: !this.state.isShowSearch })
    }
    renderHeadLeft() {
 
        return (
            <TouchableOpacity onPress={this.onBack.bind(this)}>
                <Text style={{ color: '#aaa' }}>取消</Text>
            </TouchableOpacity>
        )
    }
    ChangeCheck(item, index) { //判断点击了谁
        if (item.isCheck) {
            LetAll[index]['isCheck'] = false;
            mSelectWhat = -1;
        } else {
            LetAll.map((o, i) => {
                if (i == index) {
                    LetAll[i]['isCheck'] = true
                    mSelectWhat = i;
                } else {
                    LetAll[i]['isCheck'] = false
                }
            })
        }
        this.setState({ dataArr: ds.cloneWithRows(LetAll) });
    }
 
    renderRow(rowData, sectionID, rowID, highlightRow) {
        return (
            <ListItem onPress={this.ChangeCheck.bind(this, rowData, rowID)} key={rowID} style={{ backgroundColor: 'white', marginLeft: 0, paddingLeft: _getWidth(15) }}>
                <Left >
                    <Text style={{ lineHeight: 20 }}>{rowData.name}</Text>
                </Left>
 
                {rowData.isCheck && <Image style={{ width: 20, height: 20 }} source={require('../images/sys.png')}></Image>}
            </ListItem>
        )
    }
 
    render() {
 
        return (
            <Container style={{ backgroundColor: _backgroundColor }}>
                <Content>
              
                    <ListView
                        enableEmptySections={true}
                        dataSource={this.state.dataSource}
                        renderRow={this.renderRow.bind(this)}
                    />
                </Content>
            </Container>
        );
    }
};

export default connect(state => ({
    state: state.user
}), (dispatch) => ({
    actions: bindActionCreators(action.user, dispatch)
}))(Rechargeline);

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

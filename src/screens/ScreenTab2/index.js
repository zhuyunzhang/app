/**
 * ScreenTab2/index.js
 */
// redux 依赖
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../../redux/actions';
import React, { Component } from 'react';
import { Image } from 'react-native';

import view from './view';

class ScreenTab2 extends Component {
   static headersFind={
     title: '在线充值'
  };
  static navigationOptions = {
    title: '充值',
    tabBarIcon: ({ focused }) => {
      const icon = focused
         ? require('../../images/pay.png')
        : require('../../images/pay1.png');
      return <Image source={icon} style={{ height: 22, width: 22 }} />;
    },
  };

  constructor(props) {
    super(props);
    this.navigation = props.navigation;
  }

  changeReduxStore(userInfo) {
    // 设置 redux store
    this.props.setUserInfo(userInfo);
  }

  render() {
    return view(this);
  }
}

// 将 store 中的状态映射（map）到当前组件的 props 中
function mapStateToProps(state) {
 return { userInfo: state.reducers.userInfo };
}

// 将 actions 中定义的方法映射到当前组件的 props 中
function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

// 将 store 和 当前组件连接（connect）起来
export default connect(mapStateToProps, mapDispatchToProps)(ScreenTab2);


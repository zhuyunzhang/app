// App.js

import React, { Component } from 'react';
import App from './src/config/route'

export default class RootApp extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // 渲染页面
    return <App />;
  }
}

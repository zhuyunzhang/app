// 引入依赖
import { createStackNavigator, createAppContainer } from 'react-navigation'

// 引入页面组件
import ScreenBottomTab from '../screens/ScreenBottomTab';

// 配置路由
const navigator = createStackNavigator({
  ScreenBottomTab: ScreenBottomTab,
})

const App = createAppContainer(navigator)

export default App
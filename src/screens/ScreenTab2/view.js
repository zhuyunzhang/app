import React from 'react';
import { View, Text, Button } from 'react-native';
import pxToDp from '../../config/pxToDp';
import styles from './style';

export default self => (
	<View>
		<View>
	    <Text style={{ fontSize: pxToDp(36) }}>名字：{self.props.userInfo.name}</Text>
	    <Text style={{ fontSize: pxToDp(36) }}>性别：{self.props.userInfo.gender}</Text>
		</View>
	  <View style={{ alignItems: 'center' }}>
	    <View style={styles.buttonContainer}>
	    	<Button title="改变名字" onPress={() => self.changeReduxStore({ name: 'vince' })} />
	    </View>
	    <View style={styles.buttonContainer}>
	    	<Button style={styles.buttonContainer} title="改变性别" onPress={() => self.changeReduxStore({ gender: '女' })} />
	    </View>
	    <View style={styles.buttonContainer}>
	    	<Button style={styles.buttonContainer} title="还原" onPress={() => self.changeReduxStore({ name: '小光', gender: '男' })} />
	    </View>
	  </View>
	</View>
);
 
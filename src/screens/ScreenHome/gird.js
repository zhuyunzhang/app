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
    Image 
} from 'react-native';
const { width, height } = Dimensions.get('window');

const numColumns = 4;

export default class Me extends Component {
    render() {
        const data = [{
            content: [
                {key: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1545036342&di=aabc44e3672d5c6b2a661e76dea316c1&imgtype=jpg&er=1&src=http%3A%2F%2Fimage.tupian114.com%2F20140417%2F09021885.png.thumb.jpg', title: '扫一扫'},
                {key: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1545036342&di=aabc44e3672d5c6b2a661e76dea316c1&imgtype=jpg&er=1&src=http%3A%2F%2Fimage.tupian114.com%2F20140417%2F09021885.png.thumb.jpg', title: '审帖'},
                {key: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1545036342&di=aabc44e3672d5c6b2a661e76dea316c1&imgtype=jpg&er=1&src=http%3A%2F%2Fimage.tupian114.com%2F20140417%2F09021885.png.thumb.jpg', title: '漫画'},
                {key: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1545036342&di=aabc44e3672d5c6b2a661e76dea316c1&imgtype=jpg&er=1&src=http%3A%2F%2Fimage.tupian114.com%2F20140417%2F09021885.png.thumb.jpg', title: '我的收藏'},
                {key: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1545036342&di=aabc44e3672d5c6b2a661e76dea316c1&imgtype=jpg&er=1&src=http%3A%2F%2Fimage.tupian114.com%2F20140417%2F09021885.png.thumb.jpg', title: '附近'},
                {key: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1545036342&di=aabc44e3672d5c6b2a661e76dea316c1&imgtype=jpg&er=1&src=http%3A%2F%2Fimage.tupian114.com%2F20140417%2F09021885.png.thumb.jpg', title: '意见反馈'},
                {key: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1545036342&di=aabc44e3672d5c6b2a661e76dea316c1&imgtype=jpg&er=1&src=http%3A%2F%2Fimage.tupian114.com%2F20140417%2F09021885.png.thumb.jpg', title: '更多'},
            ],
            key: 'content',
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
        return item.key;
    }


    _renderItem = ({item}) => {
        return (
            <TouchableOpacity 
                activeOpacity={0.7}
                style={styles.item}
               onPress={()=>{Alert.alert(">>>点击 "+item.title)}}
            >
                <Image 
                    source={{uri: item.key}}  
                    style={styles.itemImage}
                />
                <Text style={styles.itemText}>{item.title}</Text>
            </TouchableOpacity>
        )
    }
    _renderSectionItem = ({section}) => {
        return (
            <FlatList
                data={section.data[0].content}
                numColumns={numColumns}
                renderItem={this._renderItem}
                style={{backgroundColor: '#fff'}}
                scrollEnabled={false}
            />
        )
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    item: {
        backgroundColor: '#fff',
        width: width/numColumns,
        height: 80,  
        alignItems: 'center',
        justifyContent: 'center',
    },
    itemImage: {
        width: 40,
        height: 40,
        marginBottom: 5,
    },
    itemText: {
        fontSize: 12,
    }

})

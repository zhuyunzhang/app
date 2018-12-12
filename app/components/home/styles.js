import {
    Dimensions
} from 'react-native';

const {height, width} =  Dimensions.get('window');

export const headsty = {
    container: {
        height:height/5,
    },
    wrapper: {
      width: width
    },
    slide: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB'
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
    },
    image: {
        width,
        height:200
    }
}
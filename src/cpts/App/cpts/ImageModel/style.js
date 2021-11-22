import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.4)'
    },
    touchable: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        height: Dimensions.get('screen').width - 10,
        width: Dimensions.get('screen').width - 10
    }
});

export default styles;
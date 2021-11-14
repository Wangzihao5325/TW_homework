import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    root: {
        flex: 1,
        height: 200,
        display: 'flex',
        flexDirection: 'column'
    },
    avatar: {
        position: 'absolute',
        right: 10,
        bottom: -30,
        height: 80,
        width: 80,
    },
    nick: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        position: 'absolute',
        bottom: 0,
        right: 92
    }
});

export default styles;

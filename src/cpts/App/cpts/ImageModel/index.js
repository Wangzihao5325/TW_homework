import React from 'react';
import { Modal, View, TouchableOpacity, Image } from 'react-native';
import useViewModal from './view.model';
import styles from './style';

const ImageModal = (props) => {
    const {
        data,
        handleTouchablePress
    } = useViewModal(props);

    return (
        <Modal
            visible={data.display}
            transparent={true}
            animationType='fade'
        >
            <View style={styles.background}>
                <TouchableOpacity style={styles.touchable} onPress={() => handleTouchablePress()}>
                    {Boolean(data.url) && <Image style={styles.image} source={{ uri: data.url }} />}
                </TouchableOpacity>
            </View>
        </Modal>
    );
}

export default ImageModal;
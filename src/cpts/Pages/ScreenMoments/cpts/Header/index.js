import React from 'react';
import { Text, ImageBackground, Image } from 'react-native';
import useViewModel from './view.model';
import styles from './style';

const Header = (props) => {
  const { bgImage, avatar, nick } = useViewModel(props);

  return (
    <ImageBackground style={styles.root} source={{ uri: bgImage }}>
      <Image style={styles.avatar} source={{ uri: avatar }} />
      <Text style={styles.nick}>{nick}</Text>
    </ImageBackground>
  );
};

export default Header;

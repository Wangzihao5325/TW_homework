import React from 'react';
import {
  SafeAreaView,
  Flatlist,
  StatusBar,
  Text,
  View,

} from 'react-native';
import useViewModel from './view.model';
import styles from './style';

import Section from './cpts/Section';

const ScreenMoments = () => {

  return (
    <SafeAreaView>
      <Section />
    </SafeAreaView>
  );
};

export default ScreenMoments;

import React from 'react';
import {
  SafeAreaView,
  FlatList,
} from 'react-native';
import useViewModel from './view.model';
import styles from './style';

import Section from './cpts/Section';

const ScreenMoments = () => {
  const { userInfo, momentsList } = useViewModel();

  return (
    <SafeAreaView>
      <FlatList
        data={momentsList}
        renderItem={({ item, index }) => {
          return (
            <Section moment={item} key={index} />
          );
        }}
      />
    </SafeAreaView>
  );
};

export default ScreenMoments;

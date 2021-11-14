import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  FlatList,
} from 'react-native';
import useViewModel from './view.model';
import styles from './style';

import Header from './cpts/Header';
import Section from './cpts/Section';

const ScreenMoments = () => {
  const { userInfo, momentsList } = useViewModel();

  return (
    <SafeAreaView>
      <ScrollView>
        <Header user={userInfo} />
        <FlatList
          style={styles.list}
          data={momentsList}
          renderItem={({ item, index }) => {
            return (
              <Section moment={item} key={index} />
            );
          }}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default ScreenMoments;

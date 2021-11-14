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
  const {
    userInfo,
    flatListData,
    getFiveMoreMoments,
    updateMoments
  } = useViewModel();

  return (
    <SafeAreaView>
      <FlatList
        listKey={'root'}
        ListHeaderComponent={
          <Header user={userInfo} />
        }
        data={flatListData}
        onEndReachedThreshold={0.2}
        renderItem={({ item, index }) => {
          return (
            <Section moment={item} key={`${JSON.stringify(item)}_${index}`} />
          );
        }}
        onEndReached={() => getFiveMoreMoments()}
        onRefresh={() => updateMoments()}
        refreshing={false}
      />
    </SafeAreaView>
  );
};

export default ScreenMoments;

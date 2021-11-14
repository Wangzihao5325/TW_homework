import React from 'react';
import {
  View,
  Image,
  Text,
  FlatList,
  TouchableHighlight,
} from 'react-native';
import useViewModel from './view.model';
import styles from './style';


const mock_data = [
  {
    "url": "https://tw-mobile-xian.github.io/moments-data/images/tweets/001.jpeg"
  },
  {
    "url": "https://tw-mobile-xian.github.io/moments-data/images/tweets/002.jpeg"
  },
  {
    "url": "https://tw-mobile-xian.github.io/moments-data/images/tweets/003.jpeg"
  }
];

const comments_mock_data = [
  {
    "content": "Good.",
    "sender": {
      "username": "leihuang",
      "nick": "Lei Huang",
      "avatar": "https://tw-mobile-xian.github.io/moments-data/images/user/avatar/002.jpeg"
    }
  },
  {
    "content": "Like it too",
    "sender": {
      "username": "weidong",
      "nick": "WeiDong Gu",
      "avatar": "https://tw-mobile-xian.github.io/moments-data/images/user/avatar/003.jpeg"
    }
  }
];

const Section = () => {

  const { handleToolBarBtnPress } = useViewModel();

  return (
    <View style={styles.root}>
      <View>
        <Image
          source={{ uri: 'https://tw-mobile-xian.github.io/moments-data/images/user/avatar.png' }}
          style={styles.avater}
        />
      </View>

      <View style={styles.container}>
        <Text style={styles.nick}>Huan Huan</Text>

        {/*文本*/
          true &&
          <Text style={styles.text}>Unlike many proprietary big data processing platform different, Spark is built on a unified abstract RDD, making it possible to deal with different ways consistent with large data processing scenarios, including MapReduce, Streaming, SQL, Machine Learning and Graph so on. To understand the Spark, you have to understand the RDD.</Text>
        }

        {/*图片*/
          true &&
          <FlatList
            style={styles.imageList}
            numColumns={3}
            data={mock_data}
            renderItem={({ item, index }) => {
              return (
                <View style={styles.imageWrapper}>
                  <Image
                    key={`${item.url}_${index}`}
                    source={{ uri: item.url }}
                    style={styles.image}
                  />
                </View>
              )
            }}
          />
        }

        {/*toolbar*/
          true &&
          <View style={styles.toolBar}>
            <Text>xxx分钟前</Text>

            <TouchableHighlight
              style={styles.toolBarBtn}
              onPress={handleToolBarBtnPress}
            >
              <Text>···</Text>
            </TouchableHighlight>
          </View>
        }

        {/*评论区*/
          true &&
          <View style={styles.commentsWrapper}>
            <FlatList
              data={comments_mock_data}
              renderItem={({ item, index }) => {
                return (
                  <View>
                    <Text>
                      <Text style={styles.commentSender}>{item.sender.nick}</Text>
                      <Text>{`:${item.content}`}</Text>
                    </Text>
                  </View>
                );
              }}
            />
          </View>
        }
      </View>
    </View>
  );
};

export default Section;

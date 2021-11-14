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

const DEFAULT_NAME = '匿名用户';
const DEFAULT_AVATER = 'https://tw-mobile-xian.github.io/moments-data/images/user/avatar.png';

const Section = (props) => {
  const {
    imageConfig,
    content,
    images,
    sender,
    comments,
    handleToolBarBtnPress,
    handleCommentSenderAvaterPress,
    handleCommentPress,
    handleImagePress,
    handleMomentSenderAvaterPress,
  } = useViewModel(props);
  const imgUrl = sender?.avatar ?? DEFAULT_AVATER;

  return (
    <View style={styles.root}>
      <TouchableHighlight
        underlayColor={'#fff'}
        onPress={handleMomentSenderAvaterPress}
      >
        <Image
          source={{ uri: imgUrl }}
          style={styles.avater}
        />
      </TouchableHighlight>

      <View style={styles.container}>
        <Text style={styles.nick}>{`${sender?.nick ?? DEFAULT_NAME}`}</Text>

        {/*文本*/
          Boolean(content) &&
          <Text style={styles.text}>{`${content}`}</Text>
        }

        {/*图片*/
          Boolean(images) &&
          <FlatList
            listKey={'image'}
            style={styles.imageList}
            numColumns={imageConfig.numColumns}
            data={images}
            renderItem={({ item, index }) => {
              return (
                <TouchableHighlight
                  style={styles.imageWrapper}
                  onPress={handleImagePress}
                  underlayColor={'#fff'}
                  key={`${JSON.stringify(item)}_${index}`}
                >
                  <Image
                    key={`${item.url}_${index}`}
                    source={{ uri: item.url }}
                    style={imageConfig.imageStyle}
                  />
                </TouchableHighlight>
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
          Boolean(comments) &&
          <View style={styles.commentsWrapper}>
            <FlatList
              listKey={'comments'}
              data={comments}
              renderItem={({ item, index }) => {
                return (
                  <View key={`${JSON.stringify(item)}_${index}`}>
                    <Text>
                      <Text
                        style={styles.commentSender}
                        onPress={handleCommentSenderAvaterPress}
                      >
                        {item.sender.nick}
                      </Text>
                      <Text
                        onPress={handleCommentPress}
                      >
                        {`:${item.content}`}
                      </Text>
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

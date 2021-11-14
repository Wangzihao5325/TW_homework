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
  const { content, images, sender, comments, handleToolBarBtnPress } = useViewModel(props);
  const imgUrl = sender?.avatar ?? DEFAULT_AVATER;
  
  return (
    <View style={styles.root}>
      <View>
        <Image
          source={{ uri: imgUrl }}
          style={styles.avater}
        />
      </View>

      <View style={styles.container}>
        <Text style={styles.nick}>{`${sender?.nick ?? DEFAULT_NAME}`}</Text>

        {/*文本*/
          Boolean(content) &&
          <Text style={styles.text}>{`${content}`}</Text>
        }

        {/*图片*/
          Boolean(images) &&
          <FlatList
            style={styles.imageList}
            numColumns={3}
            data={images}
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
          Boolean(comments) &&
          <View style={styles.commentsWrapper}>
            <FlatList
              data={comments}
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

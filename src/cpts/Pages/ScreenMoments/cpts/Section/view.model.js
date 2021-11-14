import { Alert } from 'react-native';
import styles from './style';

const useViewModel = (props) => {
  const { content, images, sender, comments } = props.moment;
  const imageNum = images?.length ?? 0;

  const calImageListConfig = (imgNum) => {
    const defaultConfig = {
      numColumns: 3,
      imageStyle: styles.image
    }
    switch (imgNum) {
      case 1:
        defaultConfig.numColumns = 1;
        defaultConfig.imageStyle = styles.image1
        break;
      case 2:
        defaultConfig.numColumns = 2;
        defaultConfig.imageStyle = styles.image2
        break;
      case 4:
        defaultConfig.numColumns = 2;
        defaultConfig.imageStyle = styles.image2
        break;
    }
    return defaultConfig;
  }

  const imageConfig = calImageListConfig(imageNum);

  const handleToolBarBtnPress = () => {
    Alert.alert('todo:弹出交互 点赞or 评论');
  }

  const handleCommentSenderAvaterPress = () => {
    Alert.alert('todo:跳转评论者porfile');
  }

  const handleCommentPress = () => {
    Alert.alert('todo:回复评论');
  }

  const handleImagePress = () => {
    Alert.alert('todo:展开大图')
  }

  const handleMomentSenderAvaterPress = () => {
    Alert.alert('todo:跳转朋友圈发布者porfile');
  }

  return {
    imageConfig,
    content,
    images,
    sender,
    comments,
    handleToolBarBtnPress,
    handleCommentSenderAvaterPress,
    handleCommentPress,
    handleImagePress,
    handleMomentSenderAvaterPress
  }
}

export default useViewModel;
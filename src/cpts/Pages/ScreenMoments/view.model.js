import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { get as getMoments } from '../../../services/moments';
import { get as getUser } from '../../../services/user';

const USER = 'user';
const MOMENTS = 'moments'

const useViewModel = () => {

  const [userInfo, setUserInfo] = useState(null);
  const [momentsList, setMomentsList] = useState([]);
  const [flatListData, setFlatListData] = useState([]);

  const getFiveMoreMoments = () => {
    if (flatListData.length >= momentsList.length) return;
    let startIndex = flatListData.length;
    let endindex = Math.min((flatListData.length - 1) + 5, momentsList.length - 1);

    setTimeout(() => {
      const reg = momentsList.filter((item, index) => {
        if (index >= startIndex && index <= endindex) {
          return true;
        }
        return false;
      })

      const newData = [...flatListData, ...reg];
      setFlatListData(newData);
    }, 500);
  }

  const updateMoments = () => {
    let startIndex = 0;
    let endindex = 4;
    setTimeout(() => {
      const reg = momentsList.filter((item, index) => {
        if (index >= startIndex && index <= endindex) {
          return true;
        }
        return false;
      })

      const newData = [...flatListData, ...reg];
      setFlatListData(newData);
    }, 500);
  }

  const fetchUser = async () => {
    //todo:网络不好的情况直接使用本地缓存
    let userJson = await getUser();
    if (!userJson) return;

    let userString = JSON.stringify(userJson);
    const localUserString = await AsyncStorage.getItem(USER);

    if (!userInfo || localUserString !== userString) {
      setUserInfo(userJson);
      await AsyncStorage.setItem(USER, userString);
    }
  }

  const delErrorMoments = (unsafeMomentsJson) => {
    const safeMomentsJson = unsafeMomentsJson.filter(item => {
      if (item.error) {
        return false;
      }
      if (item['unknown error']) {
        return false;
      }
      if (!item.content && !item.images) {
        return false;
      }
      return true;
    })
    return safeMomentsJson;
  }

  const fetchMoments = async () => {
    //todo:网络不好的情况直接使用本地缓存
    let momentsJson = await getMoments();
    if (!momentsJson) return;

    let momentsString = JSON.stringify(momentsJson);
    const localMomentsString = await AsyncStorage.getItem(MOMENTS);

    if (momentsList.length === 0 || localMomentsString !== momentsString) {
      await AsyncStorage.setItem(MOMENTS, momentsString);

      const safeMomentList = delErrorMoments(momentsJson);
      setMomentsList(safeMomentList);
    }
  }

  const init = async () => {
    await fetchUser();
    await fetchMoments();
  }

  useEffect(() => {
    init();
  }, [])

  useEffect(() => {
    getFiveMoreMoments()
  }, [momentsList])

  return {
    userInfo,
    momentsList,
    flatListData,
    getFiveMoreMoments,
    updateMoments,
  }
}

export default useViewModel;
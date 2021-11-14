import { StyleSheet, PixelRatio } from 'react-native';

const styles = StyleSheet.create({
  root: {
    display: 'flex',
    flexDirection: 'row',
    paddingHorizontal: 5,
    paddingVertical: 8,
    borderBottomWidth: 1 / PixelRatio.get(),
    borderBottomColor: '#e0e0e0'
  },
  avater: {
    height: 50,
    width: 50,
    borderRadius: 8
  },
  container: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    paddingLeft: 7,
    paddingTop: 5,
    paddingRight: 15,
  },
  nick: {
    color: '#6a7691',
    fontSize: 20,
  },
  text: {
    color: '#222',
    fontSize: 18,
    marginTop: 3,
  },
  imageList: {
    marginTop: 10,
  },
  imageWrapper: {
    paddingHorizontal: 2,
    paddingVertical: 2
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 4
  },
  image1: {
    height: 200,
    width: 200,
    borderRadius: 4
  },
  image2: {
    height: 150,
    width: 150,
    borderRadius: 4
  },
  toolBar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 5
  },
  toolBarBtn: {
    height: 18,
    width: 30,
    borderRadius: 4,
    backgroundColor: '#e0e0e0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  commentsWrapper: {
    backgroundColor: '#e0e0e0',
    paddingHorizontal: 4,
    borderRadius: 4,
    marginTop: 6
  },
  commentSender: {
    color: '#616a8b'
  },
});

export default styles;

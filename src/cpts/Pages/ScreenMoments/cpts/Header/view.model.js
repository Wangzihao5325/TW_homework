const DEFAULT_BG_IMAGE = 'https://tw-mobile-xian.github.io/moments-data/images/user/profile-image.jpeg';
const DEFAULT_AVATAR = 'https://tw-mobile-xian.github.io/moments-data/images/user/avatar.png';
const DEFAULT_NAME = '未设置昵称';

const useViewModel = (props) => {
  const user = props.user ?? {};
  const bgImage = user['profile-image'] ?? DEFAULT_BG_IMAGE;
  const avatar = user.avatar ?? DEFAULT_AVATAR;
  const nick = user.nick ?? DEFAULT_NAME;

  return {
    bgImage,
    avatar,
    nick
  }
}

export default useViewModel;
import { useState } from 'react';

const useViewModel = (props) => {
  const { content, images, sender, comments } = props.moment;

  const handleToolBarBtnPress = () => {

  }

  return {
    content,
    images,
    sender,
    comments,
    handleToolBarBtnPress
  }
}

export default useViewModel;
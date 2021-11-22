import React, { useReducer } from 'react';

const useViewModel = () => {
  const imageModalPayload = { display: false, url: '' };

  const imageModalReducer = (state, action) => {
    switch (action.type) {
      case 'show':
        return { display: true, url: action.url }
      case 'unshow':
        return { display: false, url: state.url }
      default:
        return { ...state }
    }
  }

  const [imageModalData, imageModalDispatch] = useReducer(imageModalReducer, imageModalPayload);

  return {
    imageModalData,
    imageModalDispatch
  }
}

export default useViewModel;
import React, { createContext } from 'react';
import useViewModel from './view.model';
import styles from './style';
import DispatchContext from '../Pages/context';

import ImageModal from './cpts/ImageModel';
import ScreenMoments from '../Pages/ScreenMoments';

const App = () => {
  const { imageModalData, imageModalDispatch } = useViewModel()
  return (
    <DispatchContext.Provider value={imageModalDispatch}>
      <>
        <ScreenMoments />
        <ImageModal data={imageModalData} />
      </>
    </DispatchContext.Provider>
  );
}

export default App;

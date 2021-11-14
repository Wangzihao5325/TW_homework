import React from 'react';
import useViewModel from './view.model';
import styles from './style';

import ScreenMoments from '../Pages/ScreenMoments';

const App = () => {
  const { } = useViewModel();

  return (
    <>
      <ScreenMoments />
    </>
  );
};

export default App;

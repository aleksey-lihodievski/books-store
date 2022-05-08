import React from 'react';

import { Loader } from 'components/Loader';
import { LoadingScreenBackground } from './style';

const LoadingScreen: React.FC = () => {
  return (
    <LoadingScreenBackground>
      <Loader />
    </LoadingScreenBackground>
  );
};

export default React.memo(LoadingScreen);

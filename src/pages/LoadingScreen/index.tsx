import React from 'react';

import { Loader } from 'components/Loader';
import Body from 'components/Body';
import { LoadingScreenBackground } from './style';

const LoadingScreen: React.FC = () => {
  return (
    <Body>
      <LoadingScreenBackground>
        <Loader />
      </LoadingScreenBackground>
    </Body>
  );
};

export default LoadingScreen;

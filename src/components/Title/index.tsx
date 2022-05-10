import React from 'react';

import { TTitleLevels } from 'typings/title';
import { TitleComponent } from './components/TitleComponent';

interface ITitleProps {
  level?: TTitleLevels;
  white?: boolean;
  children: React.ReactNode;
}

const Title: React.FC<ITitleProps> = ({ level, white, children }) => {
  return (
    <TitleComponent white={white} level={level}>
      {children}
    </TitleComponent>
  );
};

export default Title;

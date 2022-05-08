import React from 'react';
import { TitleComponent } from './styled';

interface ITitleProps {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
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

export default React.memo(Title);

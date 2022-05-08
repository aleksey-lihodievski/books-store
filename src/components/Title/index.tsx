import React from 'react';
import { TitleComponent } from './styled';

interface ITitleProps {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
}

const Title: React.FC<ITitleProps> = ({ level, children }) => {
  return <TitleComponent level={level}>{children}</TitleComponent>;
};

export default React.memo(Title);

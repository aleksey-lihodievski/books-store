import React from 'react';

import Title from 'components/Title';
import { InformationBlock } from './components/InformationBlock';
import { TitleWrapper } from './components/TitleWrapper';

interface IFormInformationBlockProps {
  title: string;
  children: React.ReactNode;
}

const FormInformationBlock: React.FC<IFormInformationBlockProps> = ({
  title,
  children,
}) => {
  return (
    <InformationBlock>
      <TitleWrapper>
        <Title>{title}</Title>
      </TitleWrapper>
      {children}
    </InformationBlock>
  );
};

export default FormInformationBlock;

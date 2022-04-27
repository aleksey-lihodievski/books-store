import React from 'react';

import { HeaderTag } from './styled';
import Container from 'components/Container';
import Navigation from 'containers/Navigation';
import Title from 'components/Title';

interface IProps {
  title?: string;
  image?: string;
}

const Header: React.FC<IProps> = ({ title, image }) => {
  return (
    <HeaderTag image={image}>
      <Navigation hasImage={Boolean(image)} />
      <Container>
        {title && <Title simple={!Boolean(image)}>{title}</Title>}
      </Container>
    </HeaderTag>
  );
};

export default Header;

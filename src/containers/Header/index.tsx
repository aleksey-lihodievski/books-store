import React from 'react';

import { HeaderTag } from './styled';
import Container from 'components/Container';
import Navigation from 'containers/Navigation';
import PageTitle from 'components/PageTitle';

interface IHeaderProps {
  title?: string;
  image?: string;
}

const Header: React.FC<IHeaderProps> = ({ title, image }) => {
  return (
    <HeaderTag image={image}>
      <Navigation title={title} hasImage={Boolean(image)} />
      <Container>
        {title && image && (
          <PageTitle simple={!Boolean(image)}>{title}</PageTitle>
        )}
      </Container>
    </HeaderTag>
  );
};

export default React.memo(Header);

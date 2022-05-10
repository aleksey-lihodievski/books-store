import React from 'react';

import Container from 'components/Container';
import Navigation from 'containers/Navigation';
import PageTitle from 'components/PageTitle';
import { HeaderComponent } from './components/HeaderComponent';

interface IHeaderProps {
  title?: string;
  image?: string;
}

const Header: React.FC<IHeaderProps> = ({ title, image }) => {
  return (
    <HeaderComponent image={image}>
      <Navigation title={title} hasImage={Boolean(image)} />
      <Container>
        {title && image && (
          <PageTitle simple={!Boolean(image)}>{title}</PageTitle>
        )}
      </Container>
    </HeaderComponent>
  );
};

export default React.memo(Header);

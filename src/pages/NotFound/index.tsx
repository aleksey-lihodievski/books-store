import React from 'react';

import Header from 'containers/Header';
import Container from 'components/Container';
import Body from 'components/Body';
import ShopHeader from 'assets/headers/shop-header.jpg';

const NotFound: React.FC = () => {
  return (
    <>
      <Header title='Not found' image={ShopHeader} />
      <Body>
        <Container>Page does not exists :(</Container>
      </Body>
    </>
  );
};

export default React.memo(NotFound);

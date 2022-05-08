import React from 'react';

import Header from 'containers/Header';
import Body from 'components/Body';
import Container from 'components/Container';

const Checkout: React.FC = () => {
  return (
    <>
      <Header title='Checkout' />
      <Body>
        <Container>hello</Container>
      </Body>
    </>
  );
};

export default Checkout;

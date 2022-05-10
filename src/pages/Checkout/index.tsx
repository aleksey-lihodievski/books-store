import React, { useState } from 'react';

import Header from 'containers/Header';
import Body from 'components/Body';
import Container from 'components/Container';
import Input from 'components/Input';
import Button from 'components/Button';
import Modal from 'containers/Modal';

const Checkout: React.FC = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    setVisible((visible) => !visible);
  };

  return (
    <>
      <Header title='Checkout' />
      <Body>
        <Container>
          <Input />
          <Modal
            visible={visible}
            onSubmit={toggleVisible}
            onCancel={toggleVisible}
          >
            visible
          </Modal>
          <Button onClick={toggleVisible}>Toggle Modal</Button>
        </Container>
      </Body>
    </>
  );
};

export default Checkout;

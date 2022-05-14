import React, { useCallback, useRef, useState } from 'react';
import { BsBag } from 'react-icons/bs';

import Header from 'containers/Header';
import Modal from 'containers/Modal';
import Body from 'components/Body';
import Container from 'components/Container';
import { FixedButton } from 'components/FixedButton';
import OrderForm from './components/OrderForm';
import { useAppDispatch } from 'hooks/redux';
import { IOrder } from 'typings/order';
import { buyCart } from 'redux/reducers/cart';

const Checkout: React.FC = () => {
  const dispatch = useAppDispatch();

  const [visible, setVisible] = useState(false);

  const submitRef = useRef<HTMLButtonElement>(null);

  const openModal = useCallback(() => {
    setVisible(true);
  }, []);

  const closeModal = useCallback(() => {
    setVisible(false);
  }, []);

  const handleSubmit = useCallback(
    async (values: IOrder) => {
      try {
        closeModal();
        await dispatch(buyCart()).unwrap();
        alert('Ordered successfully');
      } catch (e: any) {
        throw new Error(e.message);
      }
    },
    [closeModal, dispatch],
  );

  const triggerSubmit = useCallback(() => {
    submitRef.current?.click();
  }, []);

  return (
    <>
      <Header title='Checkout' />
      <Body>
        <Container>
          <OrderForm handleSubmit={handleSubmit} submitRef={submitRef} />
          <Modal
            title='Confirm the order?'
            visible={visible}
            onSubmit={triggerSubmit}
            onCancel={closeModal}
            maxWidth='350px'
            submitText='Yes'
            cancelText='No'
          />
          <FixedButton
            type='submit'
            primary
            bottom='3rem'
            right='3rem'
            onClick={openModal}
          >
            <BsBag />
          </FixedButton>
        </Container>
      </Body>
    </>
  );
};

export default Checkout;

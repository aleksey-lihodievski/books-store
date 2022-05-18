import React, { useCallback } from 'react';

import Header from 'containers/Header';
import Body from 'components/Body';
import Container from 'components/Container';
import OrderForm from './components/OrderForm';
import CheckoutHeader from 'assets/headers/checkout-header.jpg';
import { useAppDispatch } from 'hooks/redux';
import { IOrder } from 'typings/order';
import { buyCart } from 'redux/reducers/cart';

const Checkout: React.FC = () => {
  const dispatch = useAppDispatch();

  const handleSubmit = useCallback(
    (values: IOrder) => {
      try {
        dispatch(buyCart());
      } catch (e: any) {
        throw new Error(e.message);
      }
    },
    [dispatch],
  );

  return (
    <>
      <Header title='Checkout' image={CheckoutHeader} />
      <Body>
        <Container>
          <OrderForm handleSubmit={handleSubmit} />
        </Container>
      </Body>
    </>
  );
};

export default Checkout;

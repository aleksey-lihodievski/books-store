import React, { useCallback, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';

import Header from 'containers/Header';
import CartHeader from 'assets/headers/cart-header.jpg';
import Body from 'components/Body';
import Table from 'containers/Table';
import { selectCart } from 'redux/selectors/cart';
import { decreaseQuantity, increaseQuantity } from 'redux/reducers/cart';
import { useAppDispatch } from 'hooks/redux';
import Container from 'components/Container';
import { useMediaQuery } from 'hooks/media';
import { cartColumns } from 'constants/cart';
import Footer from './components/Footer';
import Modal from 'containers/Modal';

const CartPage: React.FC = () => {
  const dispatch = useAppDispatch();

  const [orderModalOpen, setOrderModalOpen] = useState(false);

  const cart = useSelector(selectCart);
  const totalCost = useMemo(
    () =>
      cart.usersCart.reduce((acc, item) => acc + item.price * item.quantity, 0),
    [cart],
  );
  const ableToCheckout = useMemo(() => cart.usersCart.length, [cart]);

  const isDesktop = useMediaQuery('(min-width: 768px)');

  const handleIncreaseQuantity = useCallback(
    (id: number) => {
      dispatch(increaseQuantity(id));
    },
    [dispatch],
  );

  const handleDecreaseQuantity = useCallback(
    (id: number) => {
      dispatch(decreaseQuantity(id));
    },
    [dispatch],
  );

  const onOpenOrderModal = useCallback(() => {
    setOrderModalOpen(true);
  }, [setOrderModalOpen]);

  const onCloseOrderModal = useCallback(() => {
    setOrderModalOpen(false);
  }, [setOrderModalOpen]);

  const columns = cartColumns({
    increaseQuantity: handleIncreaseQuantity,
    decreaseQuantity: handleDecreaseQuantity,
  });

  return (
    <>
      <Header title='Cart' image={CartHeader} />
      <Body>
        <Container>
          <Table
            columns={columns}
            rows={cart.usersCart}
            footer={
              <Footer
                totalCost={totalCost}
                ableToCheckout={!!ableToCheckout}
                onOrder={onOpenOrderModal}
              />
            }
          />
        </Container>
        <Modal
          title='Order'
          visible={orderModalOpen}
          onOk={onCloseOrderModal}
          onCancel={onCloseOrderModal}
        >
          Hello
        </Modal>
      </Body>
    </>
  );
};

export default CartPage;

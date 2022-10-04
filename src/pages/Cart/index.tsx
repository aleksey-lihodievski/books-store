import React, { useCallback, useMemo } from 'react';
import { useSelector } from 'react-redux';

import Header from 'containers/Header';
import CartHeader from 'assets/headers/cart-header.jpg';
import Body from 'components/Body';
import Table from 'containers/Table';
import { selectCart } from 'redux/selectors/cart';
import { decreaseQuantity, increaseQuantity } from 'redux/reducers/cart';
import { useAppDispatch } from 'hooks/redux';
import Container from 'components/Container';
import { cartColumns } from 'constants/cart';
import Footer from './components/Footer';

const CartPage: React.FC = () => {
  const dispatch = useAppDispatch();

  const cart = useSelector(selectCart);
  const totalCost = useMemo(
    () =>
      cart.usersCart.reduce((acc, item) => acc + item.price * item.quantity, 0),
    [cart],
  );
  const ableToCheckout = useMemo(() => Boolean(cart.usersCart.length), [cart]);

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

  const columns = cartColumns({
    increaseQuantity: handleIncreaseQuantity,
    decreaseQuantity: handleDecreaseQuantity,
  });

  return (
    <>
      <Header title='My cart' image={CartHeader} />
      <Body>
        <Container>
          <Table
            columns={columns}
            rows={cart.usersCart}
            footer={
              <Footer totalCost={totalCost} ableToCheckout={ableToCheckout} />
            }
          />
        </Container>
      </Body>
    </>
  );
};

export default CartPage;

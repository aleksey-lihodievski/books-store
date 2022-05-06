import React, { useCallback } from 'react';
import { useSelector } from 'react-redux';

import Header from 'containers/Header';
import CartHeader from 'assets/headers/cart-header.jpg';
import Body from 'components/Body';
import Table from 'containers/Table';
import { selectCart } from 'redux/selectors/cart';
import { decreaseQuantity, increaseQuantity } from 'redux/reducers/cart';
import { useAppDispatch } from 'hooks/redux';
import Container from 'components/Container';
import useMediaQuery from 'hooks/media';
import { cartColumns } from 'constants/cart';

const CartPage: React.FC = () => {
  const dispatch = useAppDispatch();

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

  const columns = cartColumns({
    increaseQuantity: handleIncreaseQuantity,
    decreaseQuantity: handleDecreaseQuantity,
  });

  const cart = useSelector(selectCart);

  return (
    <Body>
      <Header title='Cart' image={CartHeader} />
      <Container>
        <Table columns={columns} rows={cart.usersCart} />
      </Container>
    </Body>
  );
};

export default CartPage;

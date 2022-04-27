import React from 'react';

import Header from 'containers/Header';
import CartHeader from 'assets/headers/cart-header.jpg';
import Body from 'components/Body';

const CartPage: React.FC = () => {
  return (
    <Body>
      <Header title='Cart' image={CartHeader} />
    </Body>
  );
};

export default CartPage;

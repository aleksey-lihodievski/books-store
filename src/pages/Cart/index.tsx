import React from 'react';
import { useSelector } from 'react-redux';

import Header from 'containers/Header';
import CartHeader from 'assets/headers/cart-header.jpg';
import Body from 'components/Body';
import Table from 'containers/Table';
import { selectCart } from 'redux/selectors/cart';
import { decreaseQuantity, increaseQuantity } from 'redux/reducers/cart';
import { useAppDispatch } from 'hooks/redux';
import Container from 'components/Container';
import ProductQuantity from 'containers/ProductQuantity';
import TableCellWithImage from 'components/TableCellWithImage';
import { ICartProduct } from 'typings/entities/products';
import { Column } from 'typings/entities/column';
import useMediaQuery from 'hooks/media';

const CartPage: React.FC = () => {
  const dispatch = useAppDispatch();

  const isDesktop = useMediaQuery('(min-width: 768px)');

  const columns: Column<ICartProduct>[] = [
    {
      id: 'title',
      label: 'Product',
      align: 'left',
      flex: 3,
      minWidth: 200,
      renderCell: (row) => {
        return (
          <TableCellWithImage image={row.image}>{row.title}</TableCellWithImage>
        );
      },
    },
    {
      id: 'price',
      label: 'Price',
      align: 'center',
      flex: 1,
      minWidth: 100,
      renderCell: (row) => {
        return <>{row.price}$</>;
      },
    },
    {
      id: 'quantity',
      label: 'Quantity',
      align: 'center',
      flex: 1,
      minWidth: 100,
      renderCell: (row) => {
        const increase = () => {
          dispatch(increaseQuantity(row.id));
        };
        const decrease = () => {
          dispatch(decreaseQuantity(row.id));
        };

        return (
          <ProductQuantity
            increase={increase}
            decrease={decrease}
            quantity={row.quantity}
          />
        );
      },
    },
  ];

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

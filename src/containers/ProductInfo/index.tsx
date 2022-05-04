import React from 'react';

import Container from 'components/Container';
import Title from 'components/Title';
import Price from 'components/Price';
import Button from 'components/Button';
import Skeleton from './Skeleton';
import { useAppDispatch } from 'hooks/redux';
import { IProduct } from 'typings/entities/products';
import { ImageWrapper, Layout, ProductImage } from './styled';
import { addToCart } from 'redux/reducers/cart';

interface IProps {
  product: IProduct | null;
}

const ProductInfo: React.FC<IProps> = ({ product }) => {
  const dispatch = useAppDispatch();

  const addProductToCart = () => {
    if (product) {
      dispatch(addToCart(product));
    }
  };

  return (
    <Container>
      {product ? (
        <Layout>
          <ImageWrapper>
            <ProductImage src={product?.image} alt={product?.title} />
          </ImageWrapper>
          <div>
            <Title simple>{product?.title}</Title>
            <Price>{product?.price}$</Price>
            <p>{product?.description}</p>
            <div>
              <Button onClick={addProductToCart}>Add to cart</Button>
            </div>
          </div>
        </Layout>
      ) : (
        <Skeleton />
      )}
    </Container>
  );
};

export default React.memo(ProductInfo);

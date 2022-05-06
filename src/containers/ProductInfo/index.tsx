import React from 'react';

import Container from 'components/Container';
import Button from 'components/Button';
import Skeleton from './Skeleton';
import { useAppDispatch } from 'hooks/redux';
import { IProduct } from 'typings/entities/products';
import {
  ImageWrapper,
  Layout,
  ProductDescription,
  ProductImage,
  ProductPrice,
  ProductText,
  ProductTitle,
} from './styled';
import { addToCart } from 'redux/reducers/cart';

interface IProductInfoProps {
  product: IProduct | null;
}

const ProductInfo: React.FC<IProductInfoProps> = ({ product }) => {
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
            <ProductImage src={product.image} alt={product.title} />
          </ImageWrapper>
          <ProductText>
            <ProductTitle simple>{product.title}</ProductTitle>
            <ProductPrice>{product.price}$</ProductPrice>
            <ProductDescription>{product.description}</ProductDescription>
            <div>
              <Button onClick={addProductToCart}>Add to cart</Button>
            </div>
          </ProductText>
        </Layout>
      ) : (
        <Skeleton />
      )}
    </Container>
  );
};

export default React.memo(ProductInfo);

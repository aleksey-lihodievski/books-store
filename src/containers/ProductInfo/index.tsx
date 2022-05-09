import React from 'react';

import Container from 'components/Container';
import Skeleton from './components/Skeleton';
import { useAppDispatch } from 'hooks/redux';
import { IProduct } from 'typings/entities/products';
import { addToCart } from 'redux/reducers/cart';
import Button from 'components/Button';
import { ImageWrapper } from './components/ImageWrapper';
import { Layout } from './components/Layout';
import { ProductDescription } from './components/ProductDescription';
import { ProductImage } from './components/ProductImage';
import { ProductPrice } from './components/ProductPrice';
import { ProductText } from './components/ProductText';
import { ProductTitle } from './components/ProductTitle';

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

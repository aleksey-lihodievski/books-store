import React from 'react';

import Container from 'components/Container';
import { IProduct } from 'typings/entities/products';
import { ImageWrapper, Layout, ProductImage } from './styled';
import Title from 'components/Title';
import Price from 'components/Price';
import Button from 'components/Button';

interface IProps {
  product: IProduct | null;
}

const ProductInfo: React.FC<IProps> = ({ product }) => {
  return (
    <Container>
      <Layout>
        <ImageWrapper>
          <ProductImage src={product?.image} />
        </ImageWrapper>
        <div>
          <Title simple>{product?.title}</Title>
          <Price>{product?.price}$</Price>
          <p>{product?.description}</p>
          <div>
            <Button>Add to cart</Button>
          </div>
        </div>
      </Layout>
    </Container>
  );
};

export default React.memo(ProductInfo);

import React from 'react';

import Image from 'components/Image';
import Price from 'components/Price';
import { IProduct } from 'typings/entities/products';
import { CardBottom } from './components/CardBottom';
import { CardComponent } from './components/CardComponent';
import { CardHeader } from './components/CardHeader';
import { CardLink } from './components/CardLink';

interface CardProps {
  product: IProduct;
  onClick: (value: IProduct) => void;
}

const Card: React.FC<CardProps> = ({ product, onClick }) => {
  const { id, image, title, price } = product;

  return (
    <CardLink to={`./${id}`}>
      <CardComponent>
        <Image src={image} alt={product.title} />
        <CardBottom>
          <CardHeader>{title}</CardHeader>
          <Price>{price}$</Price>
        </CardBottom>
      </CardComponent>
    </CardLink>
  );
};

export default React.memo(Card);

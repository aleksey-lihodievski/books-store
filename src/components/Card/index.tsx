import React from 'react';
// import { AiOutlineShoppingCart, AiOutlineHeart } from 'react-icons/ai';
// import { BsHandbagFill, BsHandbag } from 'react-icons/bs';

import Image from 'components/Image';
import { CardBottom, CardComponent, CardHeader } from './styled';
import { Link } from 'react-router-dom';
import Price from 'components/Price';
import { IProduct } from 'typings/entities/products';

interface IProps {
  product: IProduct;
  onClick: (value: IProduct) => void;
}

const Card: React.FC<IProps> = ({ product, onClick }) => {
  const { id, image, title, price } = product;

  // const onClickIcon: MouseEventHandler<SVGElement> = (e) => {
  //   // e.preventDefault();
  //   onClick(product);
  // };

  return (
    <Link to={`./${id}`} style={{ textDecoration: 'none' }}>
      <CardComponent>
        <Image src={image} alt={product.title} />
        <CardBottom>
          <CardHeader>{title}</CardHeader>
          <Price>{price}$</Price>
        </CardBottom>
        {/* <CardAction>
          <BagOutlinedIcon />
          <BagFilledIcon onClick={onClickIcon} />
        </CardAction> */}
      </CardComponent>
    </Link>
  );
};

export default React.memo(Card);

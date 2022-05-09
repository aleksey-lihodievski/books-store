import React from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

import Button from 'components/Button';
import { Quantity, QuantityController } from './styled';

interface IProductQuantityProps {
  increase: () => void;
  decrease: () => void;
  quantity: number;
}

const ProductQuantity: React.FC<IProductQuantityProps> = ({
  increase,
  decrease,
  quantity,
}) => {
  return (
    <QuantityController>
      <Button dense onClick={decrease}>
        <AiOutlineMinus />
      </Button>
      <Quantity>{quantity}</Quantity>
      <Button dense onClick={increase}>
        <AiOutlinePlus />
      </Button>
    </QuantityController>
  );
};

export default ProductQuantity;

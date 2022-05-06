import Button from 'components/Button';
import React from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { QuantityController } from './styled';

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
      <span>{quantity}</span>
      <Button dense onClick={increase}>
        <AiOutlinePlus />
      </Button>
    </QuantityController>
  );
};

export default ProductQuantity;

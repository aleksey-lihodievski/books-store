import Button from 'components/Button';
import React from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { QuantityController } from './styled';

interface IProps {
  increase: () => void;
  decrease: () => void;
  quantity: number;
}

const ProductQuantity: React.FC<IProps> = ({
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

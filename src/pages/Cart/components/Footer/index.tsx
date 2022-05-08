import React from 'react';

import Paragraph from 'components/Paragraph';
import Price from 'components/Price';
import Button from 'components/Button';
import { FooterActions, FooterComponent } from './styled';

interface ITableFooterProps {
  totalCost: number;
  ableToCheckout: boolean;
  onOrder: () => void;
}

const TableFooter: React.FC<ITableFooterProps> = ({
  totalCost,
  ableToCheckout,
  onOrder,
}) => {
  return (
    <FooterComponent>
      <Paragraph>
        Total cost <Price>{totalCost}$</Price>
      </Paragraph>
      <FooterActions>
        <Button href='/products'>Back shoping</Button>
        <Button disabled={!ableToCheckout} primary onClick={onOrder}>
          Order
        </Button>
      </FooterActions>
    </FooterComponent>
  );
};

// disabled={!ableToCheckout}

export default TableFooter;

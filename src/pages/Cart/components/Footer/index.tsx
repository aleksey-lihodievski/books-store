import React from 'react';

import Paragraph from 'components/Paragraph';
import Price from 'components/Price';
import Button from 'components/Button';
import { FooterActions } from './FooterActions';
import { FooterComponent } from './FooterComponent';

interface ITableFooterProps {
  totalCost: number;
  ableToCheckout: boolean;
  onOrder?: () => void;
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
        <Button href='/checkout' disabled={!ableToCheckout} primary>
          Order
        </Button>
      </FooterActions>
    </FooterComponent>
  );
};

export default TableFooter;

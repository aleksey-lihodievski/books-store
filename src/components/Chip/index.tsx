import React from 'react';

import { ChipBody } from './styled';

interface IChipProps {
  primary?: boolean;
  checked?: boolean;
  children: string;
  onClick: (value: unknown) => unknown;
}

const Chip: React.FC<IChipProps> = ({
  primary,
  checked,
  children,
  onClick,
}) => {
  return (
    <ChipBody checked={checked} primary={primary} onClick={onClick}>
      {children}
    </ChipBody>
  );
};

export default Chip;

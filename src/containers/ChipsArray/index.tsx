import React from 'react';

import Chip from 'components/Chip';
import Scroller from 'components/Scroller';
import { ChipsArea } from './components/ChipsArea';

interface IChipsArrayProps<T extends string> {
  value: number;
  primary?: boolean;
  options: T[];
  onChange: (value: number) => void;
  className?: string;
}

const ChipsArray = <T extends string>({
  value,
  primary,
  options,
  onChange,
  className,
}: IChipsArrayProps<T>): React.ReactElement => {
  return (
    <Scroller className={className}>
      <ChipsArea>
        {options.map((option, index) => (
          <Chip
            checked={index === value}
            key={index}
            primary={primary}
            onClick={() => onChange(index)}
          >
            {option}
          </Chip>
        ))}
      </ChipsArea>
    </Scroller>
  );
};

export default React.memo(ChipsArray);

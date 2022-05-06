import React from 'react';

import Chip from 'components/Chip';

interface IChipsArrayProps<T extends string> {
  value: number;
  primary?: boolean;
  options: T[];
  onChange: (value: number) => void;
}

const ChipsArray = <T extends string>({
  value,
  primary,
  options,
  onChange,
}: IChipsArrayProps<T>): React.ReactElement => {
  return (
    <>
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
    </>
  );
};

export default React.memo(ChipsArray);

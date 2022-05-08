import React from 'react';
import Image from 'components/Image';

interface ITableCellWithImageProps {
  image: string;
  children: string;
}

const TableCellWithImage: React.FC<ITableCellWithImageProps> = ({
  image,
  children,
}) => {
  return (
    <>
      <Image src={image} border={80} alt={children} />
      <span>{children}</span>
    </>
  );
};

export default React.memo(TableCellWithImage);

import React from 'react';
import Image from 'components/Image';

interface IProps {
  image: string;
  children: string;
}

const TableCellWithImage: React.FC<IProps> = ({ image, children }) => {
  return (
    <>
      <Image src={image} border={80} alt={children} />
      <span>{children}</span>
    </>
  );
};

export default TableCellWithImage;

import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';

import Title from 'components/Title';
import Button from 'components/Button';
import { ModalHeaderComponent } from './ModalHeaderComponent';

interface IModalHeaderProps {
  title?: string;
  onCancel: () => void;
}

const ModalHeader: React.FC<IModalHeaderProps> = ({ title, onCancel }) => {
  return (
    <ModalHeaderComponent>
      <Title>{title}</Title>
      <Button onClick={onCancel} dense>
        <AiOutlineClose />
      </Button>
    </ModalHeaderComponent>
  );
};

export default React.memo(ModalHeader);

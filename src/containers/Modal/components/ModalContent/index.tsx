import React from 'react';
import { ModalContentComponent } from './styled';

interface IModalContentProps {
  children: React.ReactNode;
}

const ModalContent: React.FC<IModalContentProps> = ({ children }) => {
  return <ModalContentComponent>{children}</ModalContentComponent>;
};

export default ModalContent;

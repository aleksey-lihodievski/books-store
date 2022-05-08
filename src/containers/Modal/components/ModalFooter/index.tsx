import React from 'react';

import Button from 'components/Button';
import { ModalFooterComponent } from './styled';

interface IModalHeaderProps {
  onOk: () => void;
  onCancel: () => void;
  okText?: string;
  cancelText?: string;
  okDisabled?: boolean;
  cancelDisabled?: boolean;
  children?: React.ReactNode;
}

const ModalFooter: React.FC<IModalHeaderProps> = ({
  onOk,
  onCancel,
  okText,
  cancelText,
  okDisabled,
  cancelDisabled,
  children,
}) => {
  return (
    <ModalFooterComponent>
      {children || (
        <>
          <Button disabled={cancelDisabled} onClick={onCancel} dense>
            {cancelText}
          </Button>
          <Button primary disabled={okDisabled} onClick={onOk} dense>
            {okText}
          </Button>
        </>
      )}
    </ModalFooterComponent>
  );
};

export default React.memo(ModalFooter);

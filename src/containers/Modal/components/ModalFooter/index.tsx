import React from 'react';

import Button from 'components/Button';
import { ModalFooterComponent } from './styled';

interface IModalHeaderProps {
  onSubmit: () => void;
  onCancel: () => void;
  submitText?: string;
  cancelText?: string;
  submitDisabled?: boolean;
  cancelDisabled?: boolean;
  children?: React.ReactNode;
}

const ModalFooter: React.FC<IModalHeaderProps> = ({
  onSubmit,
  onCancel,
  submitText,
  cancelText,
  submitDisabled,
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
          <Button primary disabled={submitDisabled} onClick={onSubmit} dense>
            {submitText}
          </Button>
        </>
      )}
    </ModalFooterComponent>
  );
};

export default React.memo(ModalFooter);

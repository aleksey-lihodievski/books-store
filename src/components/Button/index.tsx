import React from 'react';

import { IButtonTypes } from 'typings/button';
import { ButtonComponent } from './components/ButtonComponent';
import { LinkComponent } from './components/LinkComponent';

interface IButtonProps {
  primary?: boolean;
  type?: IButtonTypes;
  dense?: boolean;
  disabled?: boolean;
  href?: string;
  buttonRef?: React.ForwardedRef<HTMLButtonElement>;
  onClick?: () => void;
  children: React.ReactNode;
}

const Button: React.FC<IButtonProps> = ({
  primary,
  type,
  dense,
  disabled,
  href,
  buttonRef,
  onClick,
  children,
}) => {
  if (href) {
    return (
      <LinkComponent to={disabled ? '' : href}>
        <ButtonComponent
          disabled={disabled}
          onClick={onClick}
          primary={primary}
          dense={dense}
        >
          {children}
        </ButtonComponent>
      </LinkComponent>
    );
  }

  return (
    <ButtonComponent
      type={type}
      ref={buttonRef}
      disabled={disabled}
      onClick={onClick}
      primary={primary}
      dense={dense}
    >
      {children}
    </ButtonComponent>
  );
};

export default React.forwardRef<HTMLButtonElement, IButtonProps>(
  (props, ref) => <Button {...props} buttonRef={ref} />,
);

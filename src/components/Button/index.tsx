import React from 'react';

import { ButtonComponent, LinkComponent } from './styled';

interface IButtonProps {
  primary?: boolean;
  dense?: boolean;
  disabled?: boolean;
  className?: string;
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
}

const Button: React.FC<IButtonProps> = ({
  onClick,
  primary,
  dense,
  disabled,
  className,
  href,
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
          className={className}
        >
          {children}
        </ButtonComponent>
      </LinkComponent>
    );
  }

  return (
    <ButtonComponent
      disabled={disabled}
      onClick={onClick}
      primary={primary}
      dense={dense}
      className={className}
    >
      {children}
    </ButtonComponent>
  );
};

export default React.memo(Button);

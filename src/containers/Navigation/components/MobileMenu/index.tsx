import React from 'react';
import { ILink } from 'typings/link';
import Links from '../Links';
import { MobileMenuComponent } from './MobileMenuComponent';

interface IMobileNavigationProps {
  links: ILink[];
  open: boolean;
  onCloseMobileMenu: () => void;
}

const MobileMenu: React.FC<IMobileNavigationProps> = ({
  open,
  onCloseMobileMenu,
  links,
}) => {
  return (
    <MobileMenuComponent open={open} onClick={onCloseMobileMenu}>
      <Links links={links} vertical />
    </MobileMenuComponent>
  );
};

export default MobileMenu;

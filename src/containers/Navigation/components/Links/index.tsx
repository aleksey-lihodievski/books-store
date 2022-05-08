import React from 'react';

import { LinksContainer, NavBarLink } from './styled';

interface ILinksProps {
  className?: string;
}

const Links: React.FC<ILinksProps> = ({ className }) => {
  return (
    <LinksContainer className={className}>
      <NavBarLink to='/products' end>
        Products
      </NavBarLink>
      <NavBarLink to='/cart' end>
        Cart
      </NavBarLink>
    </LinksContainer>
  );
};

export default React.memo(Links);

import React from 'react';

import { NavBarLink } from './styled';

const Links: React.FC = () => {
  return (
    <>
      <NavBarLink to='/products' end>
        Products
      </NavBarLink>
      <NavBarLink to='/cart' end>
        Cart
      </NavBarLink>
    </>
  );
};

export default Links;

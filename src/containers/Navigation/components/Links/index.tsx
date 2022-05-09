import React from 'react';

import { TLink } from 'typings/link';
import { LinksContainer, NavBarLink } from './styled';

interface ILinksProps {
  links: TLink[];
  className?: string;
}

const Links: React.FC<ILinksProps> = ({ links, className }) => {
  return (
    <LinksContainer className={className}>
      {links.map((link) => (
        <NavBarLink key={link.href} to={link.href} end>
          {link.title}
        </NavBarLink>
      ))}
    </LinksContainer>
  );
};

export default React.memo(Links);

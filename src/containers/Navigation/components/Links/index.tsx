import React from 'react';

import { ILink } from 'typings/link';
import { LinksContainer } from './components/LinksContainer';
import { NavBarLink } from './components/NavBarLink';

interface ILinksProps {
  links: ILink[];
  vertical?: boolean;
  alignRight?: boolean;
}

const Links: React.FC<ILinksProps> = ({ links, vertical, alignRight }) => {
  return (
    <LinksContainer vertical={vertical} alignRight={alignRight}>
      {links.map((link) => (
        <NavBarLink key={link.href} to={link.href} end>
          {link.title}
        </NavBarLink>
      ))}
    </LinksContainer>
  );
};

export default React.memo(Links);

import styled from 'styled-components';

import { Link } from 'components/Link';
import { Theme } from 'styles/theme';

export const NavBarLink = styled(Link)`
  font-size: 1.5rem;
  padding: 0.5rem 1rem;

  &.active {
    color: ${(props) => (props.theme as Theme).palette.primary.main};
  }
`;

export const LinksContainer = styled.div`
  display: flex;
  box-sizing: border-box;
`;

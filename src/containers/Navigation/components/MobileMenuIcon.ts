import styled from 'styled-components';
import { GiHamburgerMenu } from 'react-icons/gi';

import { Theme } from 'styles/theme';

export const MobileMenuIcon = styled(GiHamburgerMenu)`
  position: relative;
  cursor: pointer;
  z-index: 2;
  color: ${(props) => (props.theme as Theme).palette.common.white};
  font-size: 3rem;
  margin-left: auto;
`;

import styled, { css } from 'styled-components';

import { Theme } from 'styles/theme';

interface INavbarProps {
  scrolled?: boolean;
}

export const NavBar = styled.nav<INavbarProps>`
  display: flex;
  flex: 1;
  padding: 1rem 0;
  color: #fff;
  background: unset;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 2;

  ${(props) =>
    props.scrolled &&
    css`
      color: ${(props.theme as Theme).palette.common.black};
      background: ${(props) => (props.theme as Theme).palette.gray.dark};
    `}
`;

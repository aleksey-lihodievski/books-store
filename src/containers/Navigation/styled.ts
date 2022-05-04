import styled, { css, keyframes } from 'styled-components';
import { GiHamburgerMenu } from 'react-icons/gi';

import { Theme } from 'styles/theme';
import { Link } from 'components/Link';

interface INavbarProps {
  scrolled?: boolean;
}

interface IModalProps {
  open: boolean;
}

export const Desktop = styled.div`
  color: inherit;
  font-size: 1.5rem;
  display: flex;
  column-gap: 1rem;
  justify-content: flex-end;
`;

export const NavBar = styled.nav<INavbarProps>`
  display: flex;
  justify-content: flex-end;
  padding: 0.5rem 0;
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
      /* background: ${(props) => props.theme.palette.primary.main}; */
      background: ${(props) => (props.theme as Theme).palette.gray.dark};
    `}
`;

export const NavBarLink = styled(Link)`
  font-size: 1.5rem;
  padding: 0.5rem 1rem;

  &.active {
    color: ${(props) => (props.theme as Theme).palette.primary.main};
  }
`;

export const MobileMenuIcon = styled(GiHamburgerMenu)`
  position: relative;
  z-index: 2;
  color: ${(props) => (props.theme as Theme).palette.common.white};
  font-size: 3rem;
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`;

export const Mobile = styled.div<IModalProps>`
  opacity: ${(props) => (props.open ? 1 : 0)};
  animation: ${(props) => (props.open ? fadeIn : fadeOut)} 0.1s linear;

  display: flex;
  position: fixed;
  pointer-events: none;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 1rem;

  ${(props) =>
    props.open &&
    css`
      pointer-events: auto;
    `}
`;

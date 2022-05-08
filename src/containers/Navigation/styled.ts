import styled, { css, keyframes } from 'styled-components';
import { GiHamburgerMenu } from 'react-icons/gi';

import Title from 'components/Title';
import { Theme } from 'styles/theme';
import Links from './components/Links';

interface INavbarProps {
  scrolled?: boolean;
}

interface IModalProps {
  open: boolean;
}

export const DesktopNavigation = styled.div`
  color: inherit;
  font-size: 1.5rem;
  display: flex;
  flex: 1;
  align-items: center;
`;

export const MobileNavigation = styled.div`
  color: inherit;
  font-size: 1.5rem;
  display: flex;
  flex: 1;
  align-items: center;
`;

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

export const MobileMenuIcon = styled(GiHamburgerMenu)`
  position: relative;
  z-index: 2;
  color: ${(props) => (props.theme as Theme).palette.common.white};
  font-size: 3rem;
  margin-left: auto;
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

export const DesktopLinks = styled(Links)`
  margin-left: auto;
`;

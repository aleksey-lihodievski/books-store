import styled from 'styled-components';
import { NavLink as RouterLink } from 'react-router-dom';

import { Theme } from 'styles/theme';

export const Link = styled(RouterLink)`
  position: relative;
  color: ${(props) => (props.theme as Theme).palette.common.white};
  text-decoration: none;

  &::after {
    content: '';
    position: absolute;
    z-index: 2;
    top: 100%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 0;
    height: 3px;
    opacity: 1;
    /* background: ${(props) => props.theme.palette.primary.light}; */
    background: ${(props) => (props.theme as Theme).palette.gray.main};
    transition: all 0.3s ease;
  }

  &:active {
    &::after {
      background: ${(props) => (props.theme as Theme).palette.gray.dark};
    }
  }

  &.active {
    &::after {
      background: ${(props) => (props.theme as Theme).palette.primary.main};
    }
    &:active {
      &::after {
        background: ${(props) => (props.theme as Theme).palette.primary.dark};
      }
    }
  }

  &:hover {
    &::after {
      width: 100%;
    }
  }
`;

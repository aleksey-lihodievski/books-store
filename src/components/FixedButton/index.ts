import styled, { css, keyframes } from 'styled-components';

import { Theme } from 'styles/theme';

interface IFixedButtonProps {
  primary?: boolean;
  secondary?: boolean;
  disabled?: boolean;
  top?: string | number;
  left?: string | number;
  right?: string | number;
  bottom?: string | number;
}

const FixedButtonImpulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }`;

export const FixedButton = styled.button<IFixedButtonProps>`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.2s all ease;
  background: transparent;
  border: 2px solid;
  font-size: 1.7rem;
  color: ${(props) => (props.theme as Theme).palette.gray.dark};
  top: ${(props) =>
    props.top &&
    css`
      ${typeof props.top === 'number' ? props.top + 'px' : props.top}
    `};
  left: ${(props) =>
    props.left &&
    css`
      ${typeof props.left === 'number' ? props.left + 'px' : props.left}
    `};
  right: ${(props) =>
    props.right &&
    css`
      ${typeof props.right === 'number' ? props.right + 'px' : props.right}
    `};
  bottom: ${(props) =>
    props.bottom &&
    css`
      ${typeof props.bottom === 'number' ? props.bottom + 'px' : props.bottom}
    `};
  width: fit-content;
  aspect-ratio: 1/1;
  border-radius: 50%;
  padding: 1.5rem;

  ${(props) =>
    !props.disabled &&
    css`
      animation: ${FixedButtonImpulse} 1s ease-in-out infinite;
      cursor: pointer;
      &:hover {
        color: ${(props) => (props.theme as Theme).palette.gray.main};
      }
      &:active {
        color: ${(props) => (props.theme as Theme).palette.gray.light};
      }
    `}

  ${(props) =>
    props.secondary &&
    css`
      color: ${(props) => (props.theme as Theme).palette.common.white};
    `}

  ${(props) =>
    props.secondary &&
    !props.disabled &&
    css`
      background: ${(props) => (props.theme as Theme).palette.secondary.main};

      &:hover {
        background: ${(props) =>
          (props.theme as Theme).palette.secondary.light};
        color: ${(props) => (props.theme as Theme).palette.secondary.dark};
      }
      &:active {
        background: transparent;
        color: ${(props) => (props.theme as Theme).palette.secondary.main};
      }
    `}

  ${(props) =>
    props.primary &&
    css`
      color: ${(props) => (props.theme as Theme).palette.common.white};
    `}

  ${(props) =>
    props.primary &&
    !props.disabled &&
    css`
      background: ${(props) => (props.theme as Theme).palette.primary.main};

      &:hover {
        background: ${(props) => (props.theme as Theme).palette.primary.light};
        color: ${(props) => (props.theme as Theme).palette.primary.dark};
      }
      &:active {
        background: transparent;
        color: ${(props) => (props.theme as Theme).palette.primary.main};
      }
    `}

    &:disabled {
    cursor: default;
    filter: brightness(0.85);
    background: ${(props) => (props.theme as Theme).palette.gray.colors[0]};
    ${(props) =>
      props.primary &&
      css`
        color: ${(props) => (props.theme as Theme).palette.primary.light};
      `}

    ${(props) =>
      props.secondary &&
      css`
        color: ${(props) => (props.theme as Theme).palette.secondary.light};
      `}
  }
`;

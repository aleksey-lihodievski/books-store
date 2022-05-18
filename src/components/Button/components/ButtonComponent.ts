import styled, { css } from 'styled-components';

import { Theme } from 'styles/theme';

interface IButtonComponentProps {
  primary?: boolean;
  dense?: boolean;
  disabled?: boolean;
}

export const ButtonComponent = styled.button<IButtonComponentProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.2s all ease;
  border-radius: 3px;
  color: ${(props) => (props.theme as Theme).palette.gray.dark};
  border: 2px solid;
  background: transparent;
  font-size: 1.5rem;
  padding: 7px 20px;
  text-decoration: none;
  cursor: pointer;

  &[hidden] {
    display: none;
  }

  ${(props) =>
    props.dense &&
    css`
      font-size: 1.1rem;
      padding: 5px 7px;
    `}
  ${(props) =>
    !props.disabled &&
    css`
      cursor: pointer;
      &:hover {
        color: ${(props) => (props.theme as Theme).palette.gray.main};
      }
      &:active {
        color: ${(props) => (props.theme as Theme).palette.gray.light};
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
  }

  ${(props) =>
    props.primary &&
    css`
      color: ${(props) => (props.theme as Theme).palette.primary.main};
    `}

  ${(props) =>
    props.primary &&
    !props.disabled &&
    css`
      color: ${(props) => (props.theme as Theme).palette.primary.dark};
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
`;

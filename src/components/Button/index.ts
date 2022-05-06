import styled, { css } from 'styled-components';

import { Theme } from 'styles/theme';

interface IButtonProps {
  primary?: boolean;
  dense?: boolean;
}

const Button = styled.button<IButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.2s all ease;
  border-radius: 3px;
  color: #000;
  border: 2px solid;
  background: transparent;
  font-size: 1.5rem;
  padding: 7px 20px;
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
    filter: brightness(0.9);
    background: ${(props) => (props.theme as Theme).palette.gray.colors[0]};
  }
`;

export default Button;

import styled, { css } from 'styled-components';

import { Theme } from 'styles/theme';

interface IButtonProps {
  primary?: boolean;
}

const Button = styled.button<IButtonProps>`
  transition: 0.2s all ease;
  border-radius: 3px;
  color: #000;
  border: 2px solid;
  background: transparent;
  font-size: 1.5rem;
  padding: 7px 20px;
  margin-left: auto;
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

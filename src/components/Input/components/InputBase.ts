import styled, { css } from 'styled-components';
import { Theme } from 'styles/theme';

interface IInputBaseProps {
  error?: boolean;
  disabled?: boolean;
}

export const InputBase = styled.input<IInputBaseProps>`
  display: block;
  width: 100%;
  padding: 1.8rem 0.5rem 0.4rem 0.5rem;
  font-size: inherit;
  border: 0;
  box-sizing: border-box;
  background: none;
  outline: none;
  appearance: none !important;

  ${(props) =>
    props.disabled &&
    css`
      border: 1px solid ${(props.theme as Theme).palette.gray.light};
    `}

  border-bottom: 3px solid
    ${(props) => (props.theme as Theme).palette.gray.main};

  ${(props) =>
    props.error &&
    css`
      border-bottom: 3px solid ${(props.theme as Theme).palette.error.main};
    `}

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    /* display: none; <- Crashes Chrome on hover */
    -webkit-appearance: none;
    margin: 0;
  }

  &[type='number'] {
    -moz-appearance: textfield;
  }
`;

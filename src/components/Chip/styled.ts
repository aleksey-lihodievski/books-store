import styled, { css } from 'styled-components';

import { Theme } from 'styles/theme';

interface IChipProps {
  primary?: boolean;
  checked?: boolean;
}

export const ChipBody = styled.div<IChipProps>`
  display: inline-block;
  white-space: nowrap;
  column-gap: 0.3rem;
  padding: 0.3rem 1rem;
  border-radius: 99999px;
  background: transparent;
  border: 2px solid;
  color: ${(props) => (props.theme as Theme).palette.gray.dark};
  font-size: 1.5rem;
  cursor: pointer;
  transition: 0.2s all ease;

  ${(props) =>
    props.checked &&
    css`
      background: ${(props.theme as Theme).palette.gray.main};
    `}

  ${(props) =>
    props.checked &&
    props.primary &&
    css`
      background: ${(props.theme as Theme).palette.primary.main};
    `}

  &:hover {
    background: ${(props) => (props.theme as Theme).palette.gray.light};
  }
  &:active {
    background: ${(props) => (props.theme as Theme).palette.gray.main};
  }

  ${(props) =>
    props.primary &&
    css`
      color: ${(props) => (props.theme as Theme).palette.primary.dark};

      &:hover {
        background: ${(props) => (props.theme as Theme).palette.primary.light};
      }
      &:active {
        background: ${(props) => (props.theme as Theme).palette.primary.main};
      }
    `}
`;

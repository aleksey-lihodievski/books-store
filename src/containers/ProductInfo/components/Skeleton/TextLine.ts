import styled, { css } from 'styled-components';

import { Theme } from 'styles/theme';

interface TextLineProps {
  length?: number;
  main?: boolean;
  primary?: boolean;
  secondary?: boolean;
}

export const TextLine = styled.div<TextLineProps>`
  display: flex;
  margin: 0.5rem 0;
  border-radius: 999px;
  flex: 1;
  width: 100%;
  min-height: 15px;
  background: ${(props) => (props.theme as Theme).palette.gray.light};

  ${(props) =>
    props.main &&
    css`
      min-height: 2rem;
      background: ${(props) => (props.theme as Theme).palette.gray.dark};
      margin-bottom: 1.5rem;
    `}

  ${(props) =>
    props.primary &&
    css`
      background: ${(props.theme as Theme).palette.primary.main};
    `}

  ${(props) =>
    props.secondary &&
    css`
      background: ${(props.theme as Theme).palette.secondary.main};
      margin-bottom: 1rem;
    `}

  ${(props) =>
    props.length &&
    css`
      flex: 0;
      max-width: ${props.length}px;
    `}
`;

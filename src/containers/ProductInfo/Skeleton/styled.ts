import styled, { css } from 'styled-components';

import { Theme } from 'styles/theme';

interface TextLineProps {
  length?: number;
  main?: boolean;
  primary?: boolean;
  secondary?: boolean;
}

export const ImageSkeleton = styled.div`
  display: flex;
  flex: 1;
  min-height: 300px;
  background: ${(props) => (props.theme as Theme).palette.gray.light};
  border: 5px solid ${(props) => (props.theme as Theme).palette.gray.dark};
  margin-bottom: 50px;
`;

export const Layout = styled.div`
  display: grid;
  padding-top: 2rem;
  column-gap: 4rem;
  grid-template-columns: 1fr 2fr;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

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
      margin-bottom: 30px;
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
      margin-bottom: 20px;
    `}

  ${(props) =>
    props.length &&
    css`
      flex: 0;
      max-width: ${props.length}px;
    `}
`;

export const SkeletonDescription = styled.div`
  margin-bottom: 30px;
`;

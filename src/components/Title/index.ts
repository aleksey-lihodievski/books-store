import styled, { css } from 'styled-components';

import { Theme } from 'styles/theme';

interface ITitleProps {
  simple?: boolean;
}

const Title = styled.h1<ITitleProps>`
  margin: 0;
  padding: 0;
  font-style: italic;
  z-index: 2;
  font-size: 3em;
  font-weight: 500;
  text-align: center;
  color: ${(props) => (props.theme as Theme).palette.common.white};
  ${(props) =>
    props.simple &&
    css`
      color: ${(props) => (props.theme as Theme).palette.common.black};
      text-align: left;
    `}
`;

export default Title;

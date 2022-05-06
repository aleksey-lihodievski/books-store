import styled, { css } from 'styled-components';

import { Theme } from 'styles/theme';

interface IParagraphProps {
  primary?: boolean;
  secondary?: boolean;
}

const Paragraph = styled.p<IParagraphProps>`
  font-size: 1.2rem;
  line-height: 1.2;
  margin: 0;
  padding: 0;
  color: ${(props) => (props.theme as Theme).palette.common.black};

  ${(props) =>
    props.secondary &&
    css`
      color: ${(props.theme as Theme).palette.secondary.main};
    `}

  ${(props) =>
    props.primary &&
    css`
      color: ${(props.theme as Theme).palette.primary.main};
    `}
`;

export default Paragraph;

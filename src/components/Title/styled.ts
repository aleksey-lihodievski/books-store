import styled from 'styled-components';

import { Theme } from 'styles/theme';

interface ITitleComponentProps {
  level?: number;
}

export const TitleComponent = styled.h4<ITitleComponentProps>`
  margin: 0;
  padding: 0;
  font-style: italic;
  font-size: ${(props) => (props.level ? 1.5 + props.level / 10 : 1.5)}rem;
  font-weight: 500;
  color: ${(props) => (props.theme as Theme).palette.common.black};
`;

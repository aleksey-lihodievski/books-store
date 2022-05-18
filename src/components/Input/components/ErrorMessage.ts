import styled from 'styled-components';

import { Theme } from 'styles/theme';

export const ErrorMessage = styled.span`
  color: ${(props) => (props.theme as Theme).palette.error.main};
  font-size: 1rem;
  font-weight: bold;
`;

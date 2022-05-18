import styled from 'styled-components';

import { Theme } from 'styles/theme';

export const InformationBlock = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-self: center;
  justify-content: flex-start;
  padding: 0.7rem 0.5rem;
  border-radius: 0.5rem;
  background-color: ${(props) => (props.theme as Theme).palette.common.white};
  box-shadow: 0 0 0.5rem 0 rgba(0, 0, 0, 0.1);
`;

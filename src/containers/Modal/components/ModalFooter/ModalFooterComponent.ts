import styled from 'styled-components';

import { Theme } from 'styles/theme';

export const ModalFooterComponent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  column-gap: 0.3rem;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  padding: 1rem 1rem 0.3rem 1rem;
  background-color: ${(props) =>
    (props.theme as Theme).palette.gray.background};
  color: ${(props) => (props.theme as Theme).palette.gray.dark};
  font-size: 1.5rem;
`;

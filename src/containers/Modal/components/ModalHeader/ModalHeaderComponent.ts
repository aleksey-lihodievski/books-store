import styled from 'styled-components';

import { Theme } from 'styles/theme';

export const ModalHeaderComponent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  padding: 0.5rem 1rem;
  margin-bottom: 1rem;
  border-bottom: 1px solid
    ${(props) => (props.theme as Theme).palette.gray.main};
  background-color: ${(props) =>
    (props.theme as Theme).palette.gray.background};
  color: ${(props) => (props.theme as Theme).palette.gray.dark};
  font-size: 1.5rem;
`;

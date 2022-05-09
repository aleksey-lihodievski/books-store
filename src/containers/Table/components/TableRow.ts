import styled from 'styled-components';

import { Theme } from 'styles/theme/index';

export const TableRow = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  padding: 1rem 3rem;
  border-bottom: 1px solid
    ${(props) => (props.theme as Theme).palette.gray.main};
`;

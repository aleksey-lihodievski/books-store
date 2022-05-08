import styled from 'styled-components';

import { Theme } from 'styles/theme';

const Price = styled.span`
  display: flex;
  width: max-content;
  margin: 0;
  padding: 0;
  font-size: 1.5rem;
  font-weight: bold;
  color: ${(props) => (props.theme as Theme).palette.secondary.main};
`;

export default Price;

import styled from 'styled-components';

import { Theme } from 'styles/theme';

const Body = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 0;
  min-height: 100vh;
  justify-content: stretch;
  background-color: ${(props) =>
    (props.theme as Theme).palette.gray.background};
`;

export default Body;

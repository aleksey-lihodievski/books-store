import styled from 'styled-components';

import { Theme } from 'styles/theme';

export const ImageSkeleton = styled.div`
  display: flex;
  flex: 1;
  min-height: 300px;
  background: ${(props) => (props.theme as Theme).palette.gray.light};
  border: 5px solid ${(props) => (props.theme as Theme).palette.gray.dark};
  margin-bottom: 50px;
`;

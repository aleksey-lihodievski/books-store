import styled, { css } from 'styled-components';

interface ILinksContainerProps {
  vertical?: boolean;
  alignRight?: boolean;
}

export const LinksContainer = styled.div<ILinksContainerProps>`
  display: flex;
  box-sizing: border-box;
  flex-direction: row;
  flex: 1;
  ${(props) =>
    props.alignRight &&
    css`
      justify-content: flex-end;
    `}
  ${(props) =>
    props.vertical &&
    css`
      flex-direction: column;
      justify-content: center;
      text-align: center;
    `}
`;

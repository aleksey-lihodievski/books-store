import styled, { css } from 'styled-components';

interface IModalOverlayProps {
  visible?: boolean;
  transitionedIn?: boolean;
  transitionTime: number;
}

export const ModalOverlay = styled.div<IModalOverlayProps>`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  padding: 0 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  background-color: transparent;
  transition: ${(props) => props.transitionTime}ms all ease;

  ${(props) =>
    props.transitionedIn &&
    props.visible &&
    css`
      background-color: rgba(0, 0, 0, 0.5);
    `}

  z-index: 10;
`;

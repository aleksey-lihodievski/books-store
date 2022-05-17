import styled, { keyframes, css } from 'styled-components';

interface IMobileMenuProps {
  open: boolean;
}

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`;

export const MobileMenuComponent = styled.div<IMobileMenuProps>`
  opacity: ${(props) => (props.open ? 1 : 0)};
  animation: ${(props) => (props.open ? fadeIn : fadeOut)} 0.1s linear;

  display: flex;
  position: fixed;
  pointer-events: none;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 1rem;

  ${(props) =>
    props.open &&
    css`
      pointer-events: auto;
    `}
`;

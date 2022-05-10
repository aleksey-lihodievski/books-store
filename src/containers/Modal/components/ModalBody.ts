import styled, { css } from 'styled-components';

interface IModalBodyProps {
  visible?: boolean;
  transitionedIn?: boolean;
  transitionTime: number;
}

export const ModalBody = styled.div<IModalBodyProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  max-width: 500px;
  background-color: ${(props) => props.theme.palette.gray.background};
  border-radius: 0.5rem;
  overflow: hidden;
  opacity: 0;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.5);
  transition: ${(props) => props.transitionTime}ms all ease;

  ${(props) =>
    props.transitionedIn &&
    props.visible &&
    css`
      opacity: 1;
    `}
`;

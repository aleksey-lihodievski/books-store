import styled, { css } from 'styled-components';

interface IModalBodyProps {
  visible?: boolean;
  transitionedIn?: boolean;
  transitionTime: number;
  minWidth?: string | number;
  maxWidth?: string | number;
}

export const ModalBody = styled.div<IModalBodyProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  max-width: ${(props) =>
    props.maxWidth
      ? css`
          ${typeof props.maxWidth === 'number'
            ? props.maxWidth + 'px'
            : props.maxWidth}
        `
      : '500px'};
  min-width: ${(props) =>
    props.minWidth
      ? css`
          ${typeof props.minWidth === 'number'
            ? props.minWidth + 'px'
            : props.minWidth}
        `
      : 'min-content'};
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

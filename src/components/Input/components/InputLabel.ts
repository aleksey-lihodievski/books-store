import styled, { css } from 'styled-components';

interface IInputLabelProps {
  labelActive?: boolean;
}

export const InputLabel = styled.label<IInputLabelProps>`
  display: block;
  padding: 0.4rem 0.5rem;
  font-size: inherit;
  transform-origin: left top;
  position: absolute;
  left: 0px;
  bottom: 0px;
  cursor: text;
  transition: 0.2s all ease;

  ${(props) =>
    props.labelActive &&
    css`
      bottom: 0.8rem;
      transform: scale(0.7);
    `}
`;

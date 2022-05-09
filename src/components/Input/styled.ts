import styled from 'styled-components';

export const InputLabel = styled.label`
  display: block;
  padding: 0.4rem 0.5rem;
  font-size: inherit;
  transform-origin: left top;
  position: absolute;
  left: 0px;
  bottom: 0px;
  cursor: text;
  /* transform: translate(14px, 16px) scale(1); */
  /* transition: color 200ms cubic-bezier(0, 0, 0.2, 1) 0ms,
    transform 200ms cubic-bezier(0, 0, 0.2, 1) 0ms,
    max-width 200ms cubic-bezier(0, 0, 0.2, 1) 0ms; */
  transition: 0.2s all ease;
`;

export const InputBase = styled.input`
  display: block;
  width: 100%;
  padding: 0.4rem 0.5rem;
  font-size: inherit;
  border: 0;
  box-sizing: border-box;
  background: none;
  outline: none;

  &:focus + ${InputLabel} {
    bottom: 0.9rem;
    transform: scale(0.7);
  }
`;

export const InputComponent = styled.div`
  position: relative;
  display: inline-flex;
  box-sizing: border-box;
  font-size: 1.2rem;

  border-radius: 5px;
  cursor: text;
  border-bottom: 3px solid ${(props) => props.theme.palette.gray.main};
`;

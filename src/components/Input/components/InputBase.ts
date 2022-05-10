import styled from 'styled-components';

import { InputLabel } from './InputLabel';

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

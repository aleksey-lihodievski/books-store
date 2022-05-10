import styled from 'styled-components';

export const InputComponent = styled.div`
  position: relative;
  display: inline-flex;
  box-sizing: border-box;
  font-size: 1.2rem;

  border-radius: 5px;
  cursor: text;
  border-bottom: 3px solid ${(props) => props.theme.palette.gray.main};
`;

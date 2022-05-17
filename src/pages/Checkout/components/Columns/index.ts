import styled from 'styled-components';

interface IColumnsProps {
  quantity: number;
}

export const Columns = styled.div<IColumnsProps>`
  display: grid;
  flex: 1;
  grid-template-columns: repeat(${(props) => props.quantity}, 1fr);
  grid-template-rows: auto;
  column-gap: 1.5rem;
  row-gap: 1.5rem;
`;

import styled from 'styled-components';

const ProductsList = styled.div`
  display: grid;
  align-items: flex-start;
  column-gap: 1rem;
  row-gap: 1rem;
  grid-template-columns: repeat(4, minmax(200px, 1fr));

  @media (max-width: 992px) {
    grid-template-columns: repeat(3, minmax(200px, 1fr));
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(100px, 1fr));
  }

  /* @media (max-width: 568px) {
    grid-template-columns: minmax(200px, 1fr);
  } */
  /* grid-auto-rows: minmax(0, 7vh); */
`;

export default ProductsList;

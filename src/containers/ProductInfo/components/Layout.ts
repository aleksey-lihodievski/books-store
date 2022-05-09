import styled from 'styled-components';

export const Layout = styled.div`
  display: grid;
  padding-top: 2rem;
  column-gap: 4rem;
  grid-template-columns: 1fr 2fr;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

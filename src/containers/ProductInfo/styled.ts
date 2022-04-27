import styled from 'styled-components';

import Image from 'components/Image';
import { Theme } from 'styles/theme';

export const Layout = styled.div`
  display: grid;
  padding-top: 2rem;
  column-gap: 4rem;
  grid-template-columns: 1fr 2fr;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

export const ProductImage = styled(Image)`
  border: 5px solid ${(props) => (props.theme as Theme).palette.gray.dark};
`;

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 992px) {
    padding: 0.5rem 3rem;
  }
`;

import styled from 'styled-components';

import Image from 'components/Image';
import Title from 'components/Title';
import Paragraph from 'components/Paragraph';
import Price from 'components/Price';
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

export const ProductText = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProductTitle = styled(Title)`
  margin-bottom: 1.5rem;
`;

export const ProductPrice = styled(Price)`
  margin-bottom: 1rem;
`;

export const ProductDescription = styled(Paragraph)`
  margin-bottom: 2rem;
`;

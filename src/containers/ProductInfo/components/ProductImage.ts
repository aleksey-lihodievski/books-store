import styled from 'styled-components';

import Image from 'components/Image';
import { Theme } from 'styles/theme';

export const ProductImage = styled(Image)`
  border: 5px solid ${(props) => (props.theme as Theme).palette.gray.dark};
`;

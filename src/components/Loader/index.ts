import styled from 'styled-components';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

import { Theme } from 'styles/theme';

export const Loader = styled(AiOutlineLoading3Quarters)`
  font-size: 5rem;
  animation: spin 1s linear infinite;
  color: ${(props) => (props.theme as Theme).palette.primary.main};

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

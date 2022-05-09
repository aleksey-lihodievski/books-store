import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface ILinkProps {
  href?: string;
  disabled?: boolean;
}

export const LinkComponent = styled(Link)<ILinkProps>`
  color: inherit;
  text-decoration: none;
  cursor: pointer;
  transition: inherit;
  cursor: inherit;
`;

import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const CardComponent = styled.article`
  position: relative;
  border-radius: 0.3rem;
  text-decoration: none;
  position: relative;
  top: 0;
  padding: 20px;
  background: #fff;
  transition: all 0.3s ease;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: scale(1.05);
  }
`;

export const CardLink = styled(Link)`
  text-decoration: none;
`;

export const CardBottom = styled.div`
  font-weight: bold;
  margin-bottom: 10px;
  max-width: 100%;
  color: #333;
  word-wrap: break-word;
`;

export const CardHeader = styled.h3`
  font-weight: bold;
  margin-bottom: 10px;
  max-width: 100%;
  color: #333;
  word-wrap: break-word;
`;

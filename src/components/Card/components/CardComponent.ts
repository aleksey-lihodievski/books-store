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

import styled, { css } from 'styled-components';

interface IImageProps {
  border?: number;
}

const Image = styled.img<IImageProps>`
  max-width: 100%;
  height: auto;
  ${(props) =>
    props.border &&
    css`
      width: ${props.border}px;
      height: ${props.border}px;
      object-fit: contain;
    `}
`;

export default Image;

import styled, { css } from 'styled-components';

interface IHeaderTagProps {
  image?: string;
}

export const HeaderTag = styled.header<IHeaderTagProps>`
  ${(props) =>
    props.image
      ? css`
          position: relative;
          padding: 50px 0;

          &:before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-image: linear-gradient(
                rgba(0, 0, 0, 0.3),
                rgba(0, 0, 0, 0.3)
              ),
              url(${props.image});
            background-size: cover;
            background-position: center;
          }
          @media screen and (max-width: 992px) {
            background-size: cover;
            background-position: center;
            background-attachment: scroll;
          }
        `
      : css`
          padding-top: 4rem;
        `}
`;

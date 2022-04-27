import styled from 'styled-components';

import { BsHandbagFill, BsHandbag } from 'react-icons/bs';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { Theme } from 'styles/theme';

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

export const BagOutlinedIcon = styled(BsHandbag)`
  position: relative;
  font-size: 2.5rem;
  color: ${(props) => (props.theme as Theme).palette.secondary.main};
`;

export const BagFilledIcon = styled(BsHandbagFill)`
  display: none;
  position: relative;
  font-size: 2.5rem;
  color: ${(props) => (props.theme as Theme).palette.secondary.main};

  &:active {
    color: ${(props) => (props.theme as Theme).palette.secondary.light};
  }
`;

export const CardAction = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;

  &:hover ${BagFilledIcon} {
    display: block;
  }

  &:hover ${BagOutlinedIcon} {
    display: none;
  }
`;

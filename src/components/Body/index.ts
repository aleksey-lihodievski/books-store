import styled from 'styled-components';

const Body = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  justify-content: stretch;
  background-color: ${(props) => props.theme.palette.gray[1]};
`;

export default Body;

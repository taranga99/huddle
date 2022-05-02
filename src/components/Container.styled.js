import styled from "styled-components";

export const Container = styled.div`
  width: 90vw;
  margin: auto;
  max-width: 1000px;
`;

export const StyledButton = styled.button`
  background-color: ${({ bgColor }) => bgColor};
  color: ${({ color }) => color};
  width: ${({ width }) => width};
  padding: ${({ btnPadding }) => btnPadding};
  border-radius: ${({ radius }) => radius};
  font-weight: bold;
  border: none;
  box-shadow: 0px 0px 5px grey;

  @media (max-width: 768px) {
    width: ${({ width }) => width};
    padding: 10px 30px;
  }
`;

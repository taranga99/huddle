import styled from "styled-components";

export const StyledContainer = styled.div`
  width: 100%;
  background-color: lightblue;
  margin-top: 40px;
`;

export const StyledFooter = styled.div`
  display: flex;
  width: 50%;
  justify-content: space-around;

  @media (max-width: 768px) {
    width: 100%;
  }

  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

export const StyledFooterContainer = styled.div`
  padding: 40px 0px;
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const StyledIcon = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 10px;
  border: 2px solid black;
`;

export const StyledFooterContent = styled.div`
  width: 40%;
  height: ${({ height }) => height};
  align-items: ${({ alignItems }) => alignItems};
  display: flex;
  flex-direction: ${({ direction }) => (direction ? direction : "column")};
  justify-content: ${({ justifyContent }) =>
    justifyContent ? justifyContent : "space-between"};
  padding: ${({ padding }) => padding};

  p {
    color: black;
    font-weight: bold;
  }

  a {
    text-decoration: none;
    color: black;
    font-weight: bold;
  }

  @media (max-width: 500px) {
    width: 100%;
    align-items: center;
    justify-content: space-evenly;
    padding: ${({ padding }) => (padding ? "10px 10px" : "0px 0px")};
    height: ${({ smallHeight }) => smallHeight};
    margin-top: ${({ direction }) => (direction ? "20px" : null)};

    p {
      text-align: center;
    }
  }
`;

export const StyledLogo = styled.img`
  width: 150px;
`;

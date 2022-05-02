import styled from "styled-components";

export const StyledContainer = styled.div`
  background-color: lightblue;
  padding: 20px 0px;
`;

export const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
  flex: 1;

  @media (max-width: 500px) {
    flex-direction: column;
    height: 500px;
    justify-content: space-between;
    flex: 1;
  }
`;

export const StyledContent = styled.div`
  height: 230px;
  align-self: center;
  flex: 0.45;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 768px) {
    height: 230px;
  }

  @media (max-width: 500px) {
    justify-content: space-between;
    align-items: center;
    height: 200px;
    flex: 0.5;
  }
`;

export const ImgContainer = styled.div`
  flex: 0.4;

  @media (max-width: 500px) {
    flex: 0.45;
  }
`;

export const Font = styled.p`
  font-size: ${({ size }) => size};
  font-weight: ${({ weight }) => weight};

  @media (max-width: 768px) {
    font-size: 25px;
  }

  @media (max-width: 670px) {
    font-size: 21px;
    text-align: center;
  }
`;

export const StyledFont = styled.p`
  font-size: ${({ size }) => size};
  font-weight: ${({ weight }) => weight};

  @media (max-width: 768px) {
    font-size: 18px;
  }

  @media (max-width: 670px) {
    font-size: 15px;
  }

  @media (max-width: 500px) {
    text-align: center;
  }
`;

export const StyledImg = styled.img`
  width: 100%;
`;

export const StyledButton = styled.button`
  background-color: ${({ bgColor }) => bgColor};
  color: ${({ color }) => color};
  padding: ${({ btnPadding }) => btnPadding};
  border-radius: ${({ radius }) => radius};
  font-weight: bold;
  border: none;
  box-shadow: 0px 0px 5px grey;
  align-self: flex-start;

  @media (max-width: 768px) {
    font-size: 14px;
    padding: ${({ btnPadding }) => btnPadding};
    align-self: flex-start; //In my case, the button is within another flex column container, simply using align-self disabled the growing width.
    //https://stackoverflow.com/questions/65894477/how-to-prevent-button-from-taking-up-full-width-when-using-css-flexbox
  }

  @media (max-width: 670px) {
    font-size: 14px;
  }

  @media (max-width: 500px) {
    align-self: center;
  }
`;

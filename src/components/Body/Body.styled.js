import styled from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: ${({ card }) => card && card};
  border-radius: 10px;
  box-shadow: 0px 0px 5px grey;
  padding: 40px 40px;
  margin-top: 30px;

  @media (max-width: 500px) {
    flex-direction: column-reverse;
    justify-content: space-between;
  }
`;

export const StyledContent = styled.div`
  height: 200px;
  width: 50%;
  align-self: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  @media (max-width: 500px) {
    height: 150px;
    width: 100%;
    justify-content: space-around;
    margin-top: 15px;
  }
`;

export const Font = styled.p`
  font-size: ${({ size }) => size};
  font-weight: ${({ weight }) => weight};

  @media (max-width: 768px) {
    font-size: 25px;
  }

  @media (max-width: 500px) {
    font-size: 20px;
  }
`;

export const StyledFont = styled.p`
  font-size: ${({ size }) => size};
  font-weight: ${({ weight }) => weight};

  @media (max-width: 768px) {
    font-size: 18px;

    @media (max-width: 500px) {
      font-size: 15px;
    }
  }
`;

export const ImgContainer = styled.div`
  width: 50%;

  @media (max-width: 500px) {
    width: 80%;
    align-self: center;
  }
`;

export const StyledImage = styled.img`
  width: 90%;
`;

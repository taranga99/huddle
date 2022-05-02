import React from "react";
import { Container } from "../Container.styled";
import Nav from "../Nav/Nav";
import {
  Font,
  ImgContainer,
  StyledButton,
  StyledContainer,
  StyledContent,
  StyledFont,
  StyledHeader,
  StyledImg,
} from "./Header.styled";

export const Header = () => {
  return (
    <StyledContainer>
      <Nav />
      <Container>
        <StyledHeader>
          <StyledContent>
            <Font size="30px" weight="bold">
              Build The Community Your Fans Will Love
            </Font>
            <StyledFont size="15px">
              Build The Community Your Fans Will LoveBuild The Community Your
              Fans Will LoveBuild The Community Your Fans Will LoveBuild The
              Community Your Fans Will Love
            </StyledFont>
            <StyledButton
              bgColor="pink"
              color="white"
              radius="15px"
              btnPadding="10px 20px"
              width="50%"
            >
              Get Started For Free
            </StyledButton>
          </StyledContent>
          <ImgContainer>
            <StyledImg src="./images/illustration-mockups.svg" />
          </ImgContainer>
        </StyledHeader>
      </Container>
    </StyledContainer>
  );
};

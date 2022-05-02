import React from "react";
import {
  StyledContainer,
  StyledFooter,
  StyledFooterContainer,
  StyledFooterContent,
  StyledIcon,
  StyledLogo,
} from "./Footer.styled";
import { Container } from "../Container.styled";

const Footer = () => {
  return (
    <StyledContainer>
      <Container>
        <StyledFooterContainer>
          <StyledFooter>
            <StyledFooterContent height="230px">
              <StyledLogo src="./images/logo_white.svg" />
              <p>
                It takes no time at all to integrate Huddle with your app's
                authentication solution. This means, once signed in to your app,
                your users can start chatting immediately.
              </p>
              <p>123456</p>
              <p>email@email.com</p>
            </StyledFooterContent>

            <StyledFooterContent padding="70px 0px" smallHeight="150px">
              <a href="www.google.com">About Us</a>
              <a href="www.google.com">What We Do</a>
              <a href="www.google.com">FAQ</a>
            </StyledFooterContent>
          </StyledFooter>

          <StyledFooter>
            <StyledFooterContent padding="70px 0px" smallHeight="150px">
              <a href="www.google.com">About Us</a>
              <a href="www.google.com">What We Do</a>
              <a href="www.google.com">FAQ</a>
            </StyledFooterContent>

            <StyledFooterContent
              direction="row"
              alignItems="center"
              justifyContent="space-evenly"
            >
              <StyledIcon></StyledIcon>
              <StyledIcon></StyledIcon>
              <StyledIcon></StyledIcon>
            </StyledFooterContent>
          </StyledFooter>
        </StyledFooterContainer>
      </Container>
    </StyledContainer>
  );
};

export default Footer;

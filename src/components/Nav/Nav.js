import React from "react";
import { Container, StyledButton } from "../Container.styled";
import { StyledContent, StyledIcon } from "./Nav.styled";

const Nav = () => {
  return (
    <div>
      <Container>
        <StyledContent>
          <StyledIcon src="./images/logo.svg" alt="" />
          <StyledButton bgColor="white" radius="30px" btnPadding="7px 40px">
            Try For Free
          </StyledButton>
        </StyledContent>
      </Container>
    </div>
  );
};

export default Nav;

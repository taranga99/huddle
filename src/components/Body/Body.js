import React, { useState, useEffect } from "react";
import content from "../../Content";
import { Container } from "../Container.styled";
import {
  Font,
  ImgContainer,
  StyledContainer,
  StyledContent,
  StyledFont,
  StyledImage,
} from "./Body.styled";

export const Body = () => {
  const [companyInfo, setCompnayInfo] = useState([]);

  useEffect(() => {
    setCompnayInfo(content);
  }, []);

  return (
    <Container>
      {companyInfo.map((item) => (
        <StyledContainer
          key={item.id}
          card={item.id % 2 === 0 ? "row-reverse" : "row"}
        >
          <StyledContent>
            <Font size="25px" weight="bold">
              {item.title}
            </Font>
            <StyledFont size="20px">{item.body}</StyledFont>
          </StyledContent>
          <ImgContainer>
            <StyledImage src={`./images/${item.image}`} />
          </ImgContainer>
        </StyledContainer>
      ))}
    </Container>
  );
};

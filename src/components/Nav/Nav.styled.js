import styled from "styled-components";

export const StyledIcon = styled.img`
  width: 200px;

  @media (max-width: 768px) {
    width: 170px;
  }
`;

export const StyledContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 400px) {
    flex-direction: column;
    height: 100px;
  }
`;

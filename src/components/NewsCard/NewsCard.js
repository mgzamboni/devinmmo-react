import React from "react";
import { StyledButton } from "../Button/Button.styles";
import {
  StyledCardContent,
  StyledContainer,
  StyledCardTitle,
  StyledText,
  StyledCardImg,
  StyledDivider,
} from "./NewsCard.styles";

export const NewsCard = ({ title, description, thumbnail }) => {
  return (
      <>
    <StyledContainer>
      <StyledCardImg src={thumbnail} alt={title} />
      <StyledCardContent>
        <StyledCardTitle>{title}</StyledCardTitle>
        <StyledText>
          {description.length > 130
            ? description.substring(0, 127) + "..."
            : description}
        </StyledText>
        <StyledButton text={"VER MAIS"}>{"VER NO SITE"}</StyledButton>
      </StyledCardContent>
    </StyledContainer>
    <StyledDivider />
    </>
  );
};

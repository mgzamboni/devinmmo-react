import React from "react";
import { Button } from "../Button/Button";
import {
  StyledCardContent,
  StyledContainer,
  StyledCardTitle,
  StyledText,
  StyledCardImg,
  StyledDivider,
} from "./NewsCard.styles";

export const NewsCard = ({ title, description, thumbnail, articleUrl }) => {
  const redirect = (props) => {window.location.href = props}
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
        <Button buttonText="VER NO SITE" click={() => redirect(articleUrl)} />
      </StyledCardContent>
    </StyledContainer>
    <StyledDivider />
    </>
  );
};

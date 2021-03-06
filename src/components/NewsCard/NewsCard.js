import React from "react";
import { Button } from "../Button";
import {
  StyledCardContent,
  StyledContainer,
  StyledCardTitle,
  StyledText,
  StyledCardImg,
  StyledDivider,
  StyledImgContainer,
} from "./NewsCard.styles";

export const NewsCard = ({ title, description, thumbnail, articleUrl }) => {
  const redirect = (props) => {
    window.open(props);
  };
  return (
    <>
      <StyledContainer>
        <StyledImgContainer>
          <StyledCardImg src={thumbnail} alt={title} />
        </StyledImgContainer>
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

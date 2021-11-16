import React from "react";
import { Button } from "../Button/Button";
import {
  StyledCardHeader,
  StyledContainer,
  StyledCardTitle,
  StyledCardPlataform,
  StyledText,
  StyledCardImg,
} from "./Card.styles";

export const Card = ({title, platform, description, thumbnail}) => {
  return (
    <StyledContainer>
      <StyledCardImg
        src={thumbnail}
        alt={title}
      />
      <StyledCardHeader>
        <StyledCardTitle>{title}</StyledCardTitle>
        <StyledCardPlataform>{platform}</StyledCardPlataform>
      </StyledCardHeader>
      <StyledText>
        {description.length > 130 ? description.substring(0, 127) + "..." : description}
      </StyledText>
      <Button buttonText="VER MAIS" click="/" />
    </StyledContainer>
  );
};

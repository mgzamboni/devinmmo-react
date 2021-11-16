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

const text =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining";

export const Card = () => {
  return (
    <StyledContainer>
      <StyledCardImg
        src="https://assets.nintendo.com/image/upload/f_auto,q_auto,w_960,h_540/Legacy%20Videos/posters/V5OG11aTE6-7aiYH9MlzkP4UMyec-01Q"
        alt="titulo"
      />
      <StyledCardHeader>
        <StyledCardTitle>DAUNTLESS</StyledCardTitle>
        <StyledCardPlataform>PC</StyledCardPlataform>
      </StyledCardHeader>
      <StyledText>
        {text.length > 130 ? text.substring(0, 127) + "..." : text}
      </StyledText>
      <Button buttonText="VER MAIS" />
    </StyledContainer>
  );
};

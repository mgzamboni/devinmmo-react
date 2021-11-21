import React from "react";
import { useNavigate } from "react-router";
import { Button } from "../Button/Button";
import {
  StyledButtonContainer,
  StyledCardHeader,
  StyledContainer,
  StyledCardTitle,
  StyledCardPlataform,
  StyledText,
  StyledCardImg,
} from "./GameCard.styles";

export const GameCard = ({
  title,
  platform,
  description,
  thumbnail,
  gameDetails,
}) => {
  const navigate = useNavigate();
  return (
    <StyledContainer>
      <StyledCardImg src={thumbnail} alt={title} />
      <StyledCardHeader>
        <StyledCardTitle>{title}</StyledCardTitle>
        <StyledCardPlataform>{platform}</StyledCardPlataform>
      </StyledCardHeader>
      <StyledText>
        {description.length > 130
          ? description.substring(0, 127) + "..."
          : description}
      </StyledText>
      <StyledButtonContainer>
        <Button buttonText="VER MAIS" click={() => navigate("/games/" + gameDetails)} />
      </StyledButtonContainer>
    </StyledContainer>
  );
};

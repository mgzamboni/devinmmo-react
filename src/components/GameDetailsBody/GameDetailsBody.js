import React from "react";
import { StyledHDescription, StyledHTag, StyledInfoSection, StyledInfoTag, StyledInfoTags } from "./GameDetailsBody.styles";

export const GameDetailsBody = ({ genre, platform, description }) => {
  return (
    <StyledInfoSection>
      <StyledInfoTags>
        <StyledInfoTag>
          <StyledHTag>Genero</StyledHTag>
          <p>{genre}</p>
        </StyledInfoTag>
        <StyledInfoTag>
          <StyledHTag>Plataforma</StyledHTag>
          <p>{platform}</p>
        </StyledInfoTag>
      </StyledInfoTags>
      <StyledHDescription>Descrição</StyledHDescription>
      <p>{description.replace(/(<([^>]+)>)/gi, "")}</p>
    </StyledInfoSection>
  );
};

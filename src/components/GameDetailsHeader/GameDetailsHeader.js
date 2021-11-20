import React from "react";
import { StyledDetailsHeader, StyledH2 } from "./GameDetailsHeader.styles";

export const GameDetailsHeader = ({ gameTitle, releaseDate }) => {
  const gameDate = {
    year: releaseDate.split("-")[0],
    month: releaseDate.split("-")[1],
    day: releaseDate.split("-")[2],
  };
  return (
    <StyledDetailsHeader>
      <StyledH2>{`${gameTitle} (${gameDate.day}/${gameDate.month}/${gameDate.year})`}</StyledH2>
    </StyledDetailsHeader>
  );
};

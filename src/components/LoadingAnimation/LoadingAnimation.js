import React from "react";
import { StyledLoadingDisplay, StyledLoadingContainer } from "./LoadingAnimation.styles";

export const LoadingAnimation = () => {
  return (
    <StyledLoadingContainer>
      <StyledLoadingDisplay />
    </StyledLoadingContainer>
  );
};

import React from "react";
import { Button } from "../Button/Button";
import { StyledHeader, StyledLogo, StyledMenu } from "./Header.styles";

export const Header = () => {
  return (
    <StyledHeader>
      <StyledLogo>DevInMMO</StyledLogo>
      <StyledMenu>
        <Button buttonText="News" />
        <Button buttonText="Game List" />
      </StyledMenu>
    </StyledHeader>
  );
};

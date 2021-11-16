import React from "react";
import { useNavigate } from "react-router";
import { Button } from "../Button/Button";
import { StyledHeader, StyledLogo, StyledMenu } from "./Header.styles";

export const Header = () => {
  const navigate = useNavigate();
  return (
    <StyledHeader>
      <StyledLogo onClick={() => navigate("/")}>DevInMMO</StyledLogo>
      <StyledMenu>
        <Button buttonText="NEWS" click="/news" />
        <Button buttonText="GAME LIST" click="/games" />
      </StyledMenu>
    </StyledHeader>
  );
};

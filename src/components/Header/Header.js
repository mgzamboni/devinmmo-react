import React from "react";
import { useNavigate } from "react-router";
import { Button } from "../Button";
import { StyledHeader, StyledLogo, StyledMenu } from "./Header.styles";

export const Header = () => {
  const navigate = useNavigate();
  return (
    <StyledHeader>
      <StyledLogo onClick={() => navigate("/")}>DevInMMO</StyledLogo>
      <StyledMenu>
        <Button buttonText="NOTÍCIAS" click={() => navigate("/news")} />
        <Button buttonText="JOGOS" click={() => navigate("/games")} />
      </StyledMenu>
    </StyledHeader>
  );
};

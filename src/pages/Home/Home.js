import React from "react";
import { useNavigate } from "react-router";
import {
  LandingPageStyle,
  StyledHomeButton,
  StyledHomePageText,
  StyledHomePageTitle,
} from "./Home.styles";

export const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <LandingPageStyle>
        <StyledHomePageTitle>Seja bem-vindo ao DevInMMO!</StyledHomePageTitle>
        <StyledHomePageText>
          Informações e notícias sobre os principais jogos do mundo dos MMO's!
        </StyledHomePageText>
        <StyledHomeButton onClick={() => navigate("/games")} >ENTRAR</ StyledHomeButton>
      </LandingPageStyle>
    </>
  );
};

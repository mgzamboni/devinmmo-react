import React from "react";
import { StyledNotFound, StyledGoBackButton } from "./NotFound.styles";
import NotFoundImg from "../../assets/404.png";
import { useNavigate } from "react-router";


export const NotFound = () => {
  const navigate = useNavigate();
  return (
    <>
    <StyledNotFound>
      <img src={NotFoundImg} alt="404 Not Found" />
      <StyledGoBackButton onClick={() => navigate("/games")} >VOLTAR</ StyledGoBackButton>
    </StyledNotFound>
    </>
  );
};

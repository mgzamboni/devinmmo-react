import React from "react";
import { useNavigate } from "react-router";
import { StyledButton } from "./Button.styles";

export const Button = ({buttonText, click}) => {
  const navigate = useNavigate();
  return <StyledButton text={buttonText} onClick={()=>navigate(click)} >{buttonText}</StyledButton>;
};

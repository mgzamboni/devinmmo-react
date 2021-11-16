import React from "react";
import { StyledButton } from "./Button.styles";

export const Button = ({buttonText}) => {
  return <StyledButton text={buttonText}>{buttonText}</StyledButton>;
};

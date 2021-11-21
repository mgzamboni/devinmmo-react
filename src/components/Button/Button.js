import React from "react";
import { StyledButton } from "./Button.styles";

export const Button = ({buttonText, click}) => {
  return <StyledButton text={buttonText} onClick={click} >{buttonText}</StyledButton>;

};

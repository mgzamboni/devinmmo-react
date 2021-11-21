import React from "react";
import { StyledButton } from "./Button.styles";

export const Button = ({buttonText, click, type}) => {
  return <StyledButton text={buttonText} onClick={click} type={type ? type : "button"} >{buttonText}</StyledButton>;
};

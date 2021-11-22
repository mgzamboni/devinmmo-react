import React from "react";
import { StyledCountButton } from "./CountButton.styles";

export const CountButton = ({ incrementBool, count, setCount }) => {
  const handleClick = () => {
    incrementBool ? setCount(count + 1) : setCount(count - 1);
  };

  return (
    <StyledCountButton onClick={handleClick} incrementBool={incrementBool} />
  );
};

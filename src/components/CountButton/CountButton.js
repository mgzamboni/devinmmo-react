import React from "react";

export const CountButton = ({ incrementBool, count, setCount }) => {
  const handleClick = () => {
    incrementBool ? setCount(count + 1) : setCount(count - 1);
  };

  return <button onClick={handleClick}>{incrementBool ? "+" : "-"}</button>;
};

import React, { useEffect, useState } from "react";
import { CountButton } from "../CountButton";
import { StyledCounter, StyledLikeCounterContainer } from "./LikeCounter.styles";

export const LikeCounter = ({ id, likeCount }) => {
  const [counter, setCounter] = useState(likeCount);

  useEffect(() => {
    const getComments = JSON.parse(localStorage.getItem("comentarios"));
    const commentIndex = getComments.findIndex((comment) => comment.id === id);
    getComments[commentIndex].likeCount = counter;
    localStorage.setItem("comentarios", JSON.stringify(getComments));
  }, [counter, id]);

  return (
    <StyledLikeCounterContainer>
      <CountButton incrementBool={true} count={counter} setCount={setCounter} />
      <StyledCounter count={counter}>{counter}</StyledCounter>
      <CountButton
        incrementBool={false}
        count={counter}
        setCount={setCounter}
      />
    </StyledLikeCounterContainer>
  );
};

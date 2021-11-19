import React, { useEffect, useState } from "react";
import { CountButton } from "../CountButton/CountButton";

export const LikeCounter = ({ id, likeCount }) => {
  const [counter, setCounter] = useState(likeCount);

  useEffect(() => {
    const getComments = JSON.parse(localStorage.getItem("comentarios"));
    const commentIndex = getComments.findIndex((comment) => comment.id === id);
    getComments[commentIndex].likeCount = counter;
    localStorage.setItem("comentarios", JSON.stringify(getComments));
  }, [counter, id]);



  return (
    <div>
      <p>{counter}</p>
      <CountButton incrementBool={true} count={counter} setCount={setCounter} />
      <CountButton
        incrementBool={false}
        count={counter}
        setCount={setCounter}
      />
    </div>
  );
};

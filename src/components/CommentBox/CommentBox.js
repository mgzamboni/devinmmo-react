import React, { useEffect, useState } from "react";
import { LikeCounter } from "../LikeCounter/LikeCounter";

export const CommentBox = ({ gameTitle, comments }) => {
  const [filteredComments, setFilteredComments] = useState([]);

  useEffect(() => {
    const getComments = JSON.parse(localStorage.getItem("comentarios"));
    setFilteredComments(
      getComments != null
        ? getComments.filter((comment) => {
            return comment.game === gameTitle;
          })
        : []
    );
  }, [comments, gameTitle]);

  //   console.log("Comentarios filtrados! " + filteredComments.length);
  return (
    <>
      {filteredComments != null &&
        (filteredComments.length > 0 ? (
          filteredComments.map((comment) => (
            <div key={comment.id}>
              <p>Nome: {comment.nome}</p>
              <p>Email: {comment.email}</p>
              <p>Comentario: {comment.comentario}</p>
              <div>
                <LikeCounter id={comment.id} likeCount={comment.likeCount} />
              </div>
            </div>
          ))
        ) : (
          <p>Nenhum comentário encontrado.</p>
        ))}
    </>
  );
};

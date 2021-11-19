import React from "react";

export const CommentBox = ({ gameTitle }) => {
  const getComments = JSON.parse(localStorage.getItem("comentarios"));
  let filteredComments = [];
  if (getComments != null) {
    filteredComments = getComments.filter((comment) => {
      return comment.game === gameTitle;
    });
  }
  //   console.log("Comentarios filtrados! " + filteredComments.length);
  return (
    <>
      {filteredComments != null &&
        (filteredComments.length > 0 ? (
          filteredComments.map((comment, index) => (
            <p key={index}>
              {comment.nome} {comment.email} {comment.comentario}{" "}
              {comment.likeCount}
            </p>
          ))
        ) : (
          <p>Nenhum comentário encontrado.</p>
        ))}
    </>
  );
};

import React, { useEffect, useState } from "react";
import { LikeCounter } from "../LikeCounter/LikeCounter";
import {
  StyledCommentContainer,
  StyledCommentContent,
  StyledEmptyInfo,
  StyledUserName,
} from "./CommentBox.styles";

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
            <StyledCommentContainer key={comment.id}>
              <StyledCommentContent>
                <StyledUserName>{comment.nome}</StyledUserName>
                <p>{comment.comentario}</p>
              </StyledCommentContent>
              <LikeCounter id={comment.id} likeCount={comment.likeCount} />
            </StyledCommentContainer>
          ))
        ) : (
          <StyledEmptyInfo>Nenhum comentário encontrado.</StyledEmptyInfo>
        ))}
    </>
  );
};

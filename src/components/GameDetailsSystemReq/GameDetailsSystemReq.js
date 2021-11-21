import React from "react";
import {
  StyledReqHeader,
  StyledReqItem,
  StyledReqItemText,
  StyledReqItemTitle,
  StyledSystemReqBox,
} from "./GameDetailsSytemReq.styles";

export const GameDetailsSystemReq = ({
  os,
  processor,
  memory,
  graphics,
  storage,
}) => {
  return (
    <StyledSystemReqBox>
      <StyledReqHeader>Requisitos do sistema</StyledReqHeader>
      <StyledReqItem>
        <StyledReqItemTitle>Sistema Operacional:</StyledReqItemTitle>
        <StyledReqItemText>{os}</StyledReqItemText>
      </StyledReqItem>
      <StyledReqItem>
        <StyledReqItemTitle>Processador:</StyledReqItemTitle>
        <StyledReqItemText>{processor}</StyledReqItemText>
      </StyledReqItem>
      <StyledReqItem>
        <StyledReqItemTitle>Memória:</StyledReqItemTitle>
        <StyledReqItemText>{memory}</StyledReqItemText>
      </StyledReqItem>
      <StyledReqItem>
        <StyledReqItemTitle>Gráficos:</StyledReqItemTitle>
        <StyledReqItemText>{graphics}</StyledReqItemText>
      </StyledReqItem>
      <StyledReqItem>
        <StyledReqItemTitle>Espaço em disco:</StyledReqItemTitle>
        <StyledReqItemText>{storage}</StyledReqItemText>
      </StyledReqItem>
    </StyledSystemReqBox>
  );
};

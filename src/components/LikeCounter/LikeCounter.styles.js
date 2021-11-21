import styled from "styled-components";

export const StyledLikeCounterContainer = styled.div`
  margin-top: 20px;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  width: 100px;
`;

export const StyledCounter = styled.p`
  text-align: center;
  width: 30px;
  box-sizing: border-box;
  font-weight: 800;
  color: ${(props) =>
    props.count > 0
      ? "rgba(46, 204, 113, 0.8)"
      : props.count < 0 && "rgba(207, 0, 15, 0.8)"};
`;

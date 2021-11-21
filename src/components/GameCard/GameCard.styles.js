import styled from "styled-components";

/*
    StyledContainer: fonte, background, width e height, flex
*/
export const StyledContainer = styled.section`
  background: #fff;
  border: none solid;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  min-width: 400px;
  max-width: 400px;
  display: flex;
  border-radius: 10px;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  margin-bottom: 1rem;
`;

export const StyledCardImg = styled.img`
  min-width: 100%;
`;

export const StyledCardHeader = styled.section`
  min-width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0px 0px 0px;
`;

export const StyledCardTitle = styled.h2`
  text-align: left;
  width: 75%;
  color: #000;
  margin: 0px 0px 0px 15px;
`;

export const StyledCardPlataform = styled.p`
  font-size: 12px;
  text-align: center;
  width: 35%;
  line-height: 150%;
  color: dodgerblue;
  margin: 0px 15px 0px 0px;
  border: 2px solid dodgerblue;
  border-radius: 10px;
`;

export const StyledText = styled.p`
  font-size: 20px;
  color: #000;
  margin: 15px 15px;
  height: 7rem;
`;

export const StyledButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
  width: 100%;
  height: 3rem;
`;

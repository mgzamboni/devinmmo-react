import styled from "styled-components";

/*
    StyledContainer: fonte, background, width e heighte, flex
*/
export const StyledContainer = styled.section`
  background: #fff;
  border: none solid;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  width: 400px;
  height: 450px;
  display: flex;
  border-radius: 10px;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`;

export const StyledCardImg = styled.img`
  width: 100%;
  height: 50%;
`;

export const StyledCardHeader = styled.div`
  width: 100%;
  height: 10%;
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
  width: 15%;
  color: dodgerblue;
  margin: 0px 15px 0px 0px;
  border: 2px solid dodgerblue;
  border-radius: 10px;
`;

export const StyledText = styled.p`
  font-size: 20px;
  height: 25%;
  color: #000;
  margin: 15px 15px;
`;

export const StyledButton = styled.button`
  background-color: #fff;
  padding: 0;
  border: 1px solid #bbb;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-radius: 5px;
  color: #bbb;
  width: 100px;
  height: 55px;
  margin: 10px;
`;

import styled from "styled-components";

export const StyledContainer = styled.section`
  background: #fff;
  border: none solid;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  width: 80vw;
  height: auto;
  min-width: 800px;
  display: flex;
  border-radius: 10px;
  flex-direction: row;
  align-items: center;
  overflow: hidden;
  margin: 1rem auto;
`;

export const StyledImgContainer = styled.div`
  display: flex;
  align-items: baseline;
  width: 30%;
  min-width: 300px;
  max-width: 400px;
  box-sizing: border-box;
`;

export const StyledCardImg = styled.img`
  width: 100%;
  object-fit: fill;
`;

export const StyledCardContent = styled.div`
  width: 70%;
  height: 100%;
  min-width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: left;
  margin: 20px 20px;
`;

export const StyledCardTitle = styled.h2`
  margin-bottom: 30px;
`;

export const StyledText = styled.p`
  margin-bottom: 30px;
`;

export const StyledDivider = styled.div`
  width: 80vw;
  margin: 1rem auto;
  border-bottom: 3px solid #ccc;
  min-width: 800px;
`;

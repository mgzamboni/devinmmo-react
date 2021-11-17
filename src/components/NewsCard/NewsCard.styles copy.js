import styled from "styled-components";

export const StyledContainer = styled.section`
  background: #fff;
  border: none solid;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  width: 100%;
  display: flex;
  border-radius: 10px;
  flex-direction: row;
  overflow: hidden;
  margin-bottom: 1rem;
`;

export const StyledImgContainer = styled.section`
  width: 50%;
  background-color: green;
`;

export const StyledCardImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const StyledCardContent = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: black;
  overflow: hidden;
  flex-wrap: wrap;
`;

export const StyledCardTitle = styled.h2`
  /* text-align: left;
  width: 75%;
  color: #000;
  margin: 0px 0px 0px 15px; */
  background-color: blue;
  flex-wrap: break-word;
  margin: 0;
`;

export const StyledText = styled.p`
  /* font-size: 20px;
  color: #000;
  margin: 15px 15px; */
  background-color: red;
  margin: 0;
  align-items: center;
`;

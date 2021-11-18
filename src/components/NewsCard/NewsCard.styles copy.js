import styled from "styled-components";

/*
    StyledContainer: fonte, background, width e height, flex
*/
export const StyledContainer = styled.section`
  display: flex;
  flex-direction: row;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  width: 75%;
  margin: 0px auto;
`;

export const StyledCardImg = styled.img`
  display: block;
  height: 300px;
  object-fit: cover;
  max-width: 100%;
`;

export const StyledCardContent = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-left: 3rem;
`;

export const StyledCardTitle = styled.h2`
  text-align: left;
  margin-top: 1rem;
  width: 100%;
`;

export const StyledText = styled.p`
  text-align: left;
  width: 100%;
`;

export const StyledButton = styled.button`
  background-color: #fff;
  padding: 0;
  border: 1px solid #bbb;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-radius: 5px;
  color: #888;
  width: 100px;
  height: 2.5rem;
  margin-bottom: 1rem;
`;

export const StyledDivider = styled.div `
  width: 75%;
  margin: 20px auto;
  border-bottom: 3px solid #ccc;
`
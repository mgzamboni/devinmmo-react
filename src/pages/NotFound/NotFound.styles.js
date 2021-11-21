import styled from "styled-components";

export const StyledNotFound = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 100%;
  height: 100vh;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  background: black;
`;

export const StyledGoBackButton = styled.button`
  cursor: pointer;
  font-weight: 800;
  font-size: 20px;
  background-color: rgba(255, 255, 255, 1);
  border: 1px solid rgba(0, 0, 0, 0.18);
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-radius: 5px;
  color: rgba(0, 0, 0, 0.8);
  width: 20vw;
  max-width: 150px;
  height: 3.5rem;
  &:hover {
    font-weight: 800;
    color: rgba(255, 255, 255, 1);
    background-color: rgba(0, 0, 0, 0.6);
    border: 1px solid rgba(255, 255, 255, 1);
    box-shadow: rgba(255, 255, 255, 0.6) 0px 2px 8px 0px;
  }
`;

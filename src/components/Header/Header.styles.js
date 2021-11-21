import styled from "styled-components";

export const StyledHeader = styled.header`
  background: #fff;
  border: none solid;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  width: 100%;
  min-width: 400px;
  margin: 0 auto;
  height: 4rem;
  display: flex;
  border-radius: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

export const StyledLogo = styled.h1`
  cursor: pointer;
  color: #000;
  margin-left: 1rem;
  font-size: 2rem;
  &:hover {
    color: rgba(0, 0, 0, 0.4);
  }
`;

export const StyledMenu = styled.section`
  display: flex;
  flex-direction: row;
  column-gap: 1vw;
  width: 22vw;
  max-width: 220px;
  margin-right: 1rem;
`;

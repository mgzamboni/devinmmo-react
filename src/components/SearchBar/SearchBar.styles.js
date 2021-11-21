import styled from "styled-components";
import procurar from "../../assets/procurar.png"

export const StyledSearchBar = styled.input`
  background: #fff;
  border: none;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  width: 95vw;
  height: 2.5rem;
  display: block;
  border-radius: 10px;
  flex-direction: row;
  align-items: center;
  margin: 1.5rem auto 0px auto;
  padding: 0;
  background-image: url(${procurar});
  background-repeat: no-repeat;
  background-position: center; 
  background-position-x: 0.5rem; 
  background-size: 1rem;
  padding-left: 2rem;
  box-sizing: border-box;
  outline:0;
`;
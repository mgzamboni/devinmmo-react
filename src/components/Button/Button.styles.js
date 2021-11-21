import styled from "styled-components";

export const StyledButton = styled.button`
  cursor: pointer;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.18);
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-radius: 5px;
  color: rgba(0, 0, 0, 0.6);
  width: 20vw;
  max-width: 100px;
  height: 2.5rem;
  &:hover{
    font-weight: 550;
    color: rgba(50, 128, 220, 1);
    background-color:  rgba(50, 128, 220, 0.18);
    border: 1px solid rgba(50, 128, 220, 0.18);
    box-shadow: rgba(99, 99, 99, 0.6) 0px 2px 8px 0px;
  };
`;

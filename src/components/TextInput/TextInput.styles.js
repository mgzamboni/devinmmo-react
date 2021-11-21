import styled from "styled-components";

export const StyledFormGroup = styled.section``;
export const StyledLabel = styled.label``;
export const StyledTextInput = styled.input`
  margin: 0px;
  text-align: left;
  font-family: "Montserrat", sans-serif;
  padding: 10px;
  font-size: 18px;
  background: #fff;
  border: 1px solid rgba(0, 0, 0, 0.08);
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  width: 100%;
  height: 2.5rem;
  display: block;
  border-radius: 10px;
  flex-direction: row;
  align-items: center;
  box-sizing: border-box;
  outline: 0;
  resize: none;
  &::placeholder {
    color: rgba(0, 0, 0, 0.24);
  }
`;

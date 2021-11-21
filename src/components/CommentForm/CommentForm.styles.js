import styled from "styled-components";
import { Button } from "../Button/Button";

export const StyledFormBox = styled.div`
  width: 80vw;
  margin: 0 auto;
`;

export const StyledHDescription = styled.h3`
  margin-top: 15px;
  margin-bottom: 20px;
`;

export const StyledFormFields = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`;

export const StyledFormField = styled.div`
  margin-bottom: 15px;
  width: 49%;
`;

export const FormButton = styled(Button)`
  margin: 20px 20px;
`;

export const StyledFormTextField = styled(StyledFormField)`
  width: 100%;
`;

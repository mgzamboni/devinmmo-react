import styled from "styled-components";

export const StyledLoadingDisplay = styled.div`
  width: 2rem;
  height: 2rem;
  border: 5px solid #f3f3f3;
  border-top: 6px solid rgb(50, 128, 220);
  border-radius: 100%;
  margin: auto;
  animation: spin 1s infinite linear;
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

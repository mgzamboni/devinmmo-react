import React from "react";
import { MainRouter } from "./routes/MainRouter";
import { GlobalStyles } from "./styles/GlobalStyles";

export default function App() {
  return (
    <>
      <GlobalStyles />
      <MainRouter />
    </>
  );
}

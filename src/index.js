import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GameDetails } from "./pages/GameDetails";
// import { ThemeProvider } from "styled-components";
import { GameList } from "./pages/GameList";
import { Home } from "./pages/Home";
import { NewsList } from "./pages/NewsList";
import { NotFound } from "./pages/NotFound";
import { GlobalStyles } from "./styles/GlobalStyles";

const Index = () => {
  return (
    // <ThemeProvider theme={theme}>
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/games" element={<GameList />} />
          <Route path="/news" element={<NewsList />} />
          <Route path="/games/:id" element={<GameDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
    // </ThemeProvider>
  );
};

ReactDOM.render(<Index />, document.getElementById("root"));

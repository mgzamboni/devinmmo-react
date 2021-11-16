import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GameList } from "./pages/GameList";
import { Home } from "./pages/Home";
import { NewsList } from "./pages/NewsList";

const Index = () => {
  return (
    // <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/games" element={<GameList />} />
          <Route path="/news" element={<NewsList />} />
        </Routes>
      </BrowserRouter>
    // </ThemeProvider>
  );
};

ReactDOM.render(<Index />, document.getElementById("root"));

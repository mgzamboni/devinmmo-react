import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GameDetails } from "../pages/GameDetails";
import { GameList } from "../pages/GameList";
import { Home } from "../pages/Home";
import { NewsList } from "../pages/NewsList";
import { NotFound } from "../pages/NotFound";

export function MainRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/games" element={<GameList />} />
        <Route path="/news" element={<NewsList />} />
        <Route path="/games/:id" element={<GameDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

import React from "react";
import { Card } from "../components/Card";
import { Header } from "../components/Header/Header";
import "../styles/main.css";
import { GameList } from "./GameList";

export const Home = () => {
  return (
    <>
      <Header />
      <GameList />
    </>
  );
};

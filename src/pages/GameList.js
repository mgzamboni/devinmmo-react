import Axios from "axios";
import React, { useEffect, useState } from "react";
import { Card } from "../components/Card/Card";
import { Header } from "../components/Header/Header";
import { SearchBar } from "../components/SearchBar/SearchBar";
import { StyledGameList } from "./GameList.styles";

export const GameList = () => {
  const [games, setGames] = useState([]);
  const [filteredGames, setFilteredGames] = useState([]);

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://mmo-games.p.rapidapi.com/games",
      headers: {
        "x-rapidapi-host": "mmo-games.p.rapidapi.com",
        "x-rapidapi-key": "268cc61283msh211ba6ef01d0beep16cdb6jsna3329cb584ea",
      },
    };

    Axios.request(options)
      .then(function (response) {
        setGames(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return (
    <>
      <Header />
      {<SearchBar games={games} setGames={setFilteredGames} />}
      <StyledGameList>
        {filteredGames.length > 0 ? (
          filteredGames.map((game) => (
            <Card
              key={game.id}
              title={game.title}
              plataform={game.plataform}
              description={game.short_description}
              thumbnail={game.thumbnail}
            />
          ))
        ) : (
          <p>Não há cards disponíveis!</p>
        )}
      </StyledGameList>
    </>
  );
};

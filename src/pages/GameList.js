import Axios from "axios";
import React, { useEffect, useState } from "react";
import { GameCard } from "../components/GameCard";
import { Header } from "../components/Header";
import { SearchBar } from "../components/SearchBar";
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
      {/* <SearchBar onChange={setCount} count={count} />
      <p>Count: {count}</p> */}
      {<SearchBar games={games} setGames={setFilteredGames} />}
      <StyledGameList>
        {filteredGames.length > 0 ? (
          filteredGames.map((game) => (
            <GameCard
              key={game.id}
              title={game.title}
              platform={game.platform}
              description={game.short_description}
              thumbnail={game.thumbnail}
            />))
        ) : (
          <p>Não há cards disponíveis!</p>
        )}
      </StyledGameList>
    </>
  );
};

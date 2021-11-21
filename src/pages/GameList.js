import React, { useEffect, useState } from "react";
import { GameCard } from "../components/GameCard";
import { Header } from "../components/Header";
import { LoadingAnimation } from "../components/LoadingAnimation";
import { SearchBar } from "../components/SearchBar";
import { getDataList } from "../services/axios-service";
import { StyledGameList } from "../styles/GameList.styles";

export const GameList = () => {
  const [games, setGames] = useState([]);
  const [error, setError] = useState(0);
  const [filteredGames, setFilteredGames] = useState([]);

  useEffect(() => {
    getDataList("games")
      .then((data) => {
        setGames(data);
      })
      .catch(function (err) {
        setError(err.response.status);
      });
  }, []);

  return (
    <>
      <Header />
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
              gameDetails={game.id}
            />
          ))
        ) : error === 0 ? (
          <LoadingAnimation />
        ) : (
          <p>Desculpe, não foi possível carregar a página!</p>
        )}
      </StyledGameList>
    </>
  );
};

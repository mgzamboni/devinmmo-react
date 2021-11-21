import React, { useEffect, useState } from "react";
import { Header } from "../components/Header";
import { NewsCard } from "../components/NewsCard";
import { StyledNewsList } from "../styles/NewsList.styles";
import { SearchBar } from "../components/SearchBar";
import { getDataList } from "../services/axios-service";
import { LoadingAnimation } from "../components/LoadingAnimation";

export const NewsList = () => {
  const [games, setGames] = useState([]);
  const [error, setError] = useState(0);
  const [filteredGames, setFilteredGames] = useState([]);

  useEffect(() => {
    getDataList("latestnews")
      .then((data) => {
        setGames(data);
      })
      .catch(function (err) {
        setError(err.response.status);
      });
  }, []);

  return (
    <div>
      <Header />
      {<SearchBar games={games} setGames={setFilteredGames} />}
      <StyledNewsList>
        {filteredGames.length > 0 ? (
          filteredGames.map((game) => (
            <NewsCard
              key={game.id}
              title={game.title}
              description={game.short_description}
              thumbnail={game.thumbnail}
              articleUrl={game.article_url}
            />
          ))
        ) : error === 0 ? (
          <LoadingAnimation />
        ) : (
          <p>Desculpe, não foi possível carregar a página!</p>
        )}
      </StyledNewsList>
    </div>
  );
};

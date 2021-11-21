import axios from "axios";
import React, { useEffect, useState } from "react";
import { Header } from "../components/Header";
import { NewsCard } from "../components/NewsCard";
import { StyledNewsList } from "./NewsList.styles";
import { SearchBar } from "../components/SearchBar"

export const NewsList = () => {
  const [games, setGames] = useState([]);
  const [filteredGames, setFilteredGames] = useState([]);

  useEffect(() => {
    const options = {
      method: 'GET',
      url: 'https://mmo-games.p.rapidapi.com/latestnews',
      headers: {
        'x-rapidapi-host': 'mmo-games.p.rapidapi.com',
        'x-rapidapi-key': '268cc61283msh211ba6ef01d0beep16cdb6jsna3329cb584ea'
      }
    };

    axios.request(options)
      .then(function (response) {
        setGames(response.data);
      })
      .catch(function (error) {
        console.error(error);
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
            />))
        ) : (
          <p>Não há cards disponíveis!</p>
        )}
      </StyledNewsList>
    </div>
  );
};

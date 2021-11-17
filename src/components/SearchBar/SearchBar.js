import React, { useEffect, useState } from "react";

export const SearchBar = ({ games, setGames }) => {
  const [searchValue, setSearchValue] = useState("");

  const filterGames = () => {
    const filteredGames = games.filter((game) => {
      return game.title.toLowerCase().includes(searchValue.toLowerCase());
    });

    searchValue !== "" ? setGames(filteredGames) : setGames(games);
  };

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  useEffect(() => {
    filterGames();
  }, [searchValue]);

  return (
    <div>
      <input
        type="text"
        value={searchValue}
        placeholder={"Search games"}
        onChange={handleInputChange}
      />
    </div>
  );
};

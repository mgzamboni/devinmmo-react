import React, { useCallback, useEffect, useState } from "react";
import { StyledSearchBar } from "./SearchBar.styles";

export const SearchBar = ({ games, setGames }) => {
  const [searchValue, setSearchValue] = useState("");

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  const setNewList = useCallback(
    (newList) => {
      setGames(newList);
    },
    [setGames]
  );

  useEffect(() => {
    const filterGames = () => {
      const filteredGames = games.filter((game) => {
        return game.title.toLowerCase().includes(searchValue.toLowerCase());
      });
      // searchValue !== "" ? setGames(filteredGames) : setGames(games);
      searchValue !== "" ? setNewList(filteredGames) : setNewList(games);
    };
    filterGames();
  }, [searchValue, games, setNewList]);

  return (
    <>
    
    <p></p>
      <StyledSearchBar
        type="text"
        value={searchValue}
        placeholder={"Search games"}
        onChange={handleInputChange}
      />
    </>
  );
};

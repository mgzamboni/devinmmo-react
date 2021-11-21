import React, { useCallback, useEffect, useState } from "react";
import { PropTypes } from "prop-types";
import { StyledSearchBar } from "./SearchBar.styles";
import { SearchBarText } from "../SearchBarText";

export const SearchBar = ({ sourceList, setList, listSize }) => {
  const [searchValue, setSearchValue] = useState("");
  const [searchBool, setSearchBool] = useState(false);

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  const setNewList = useCallback(
    (newList) => {
      setList(newList);
    },
    [setList]
  );

  useEffect(() => {
    const filteredGames = sourceList.filter((game) => {
      return game.title.toLowerCase().includes(searchValue.toLowerCase());
    });
    searchValue !== "" ? setNewList(filteredGames) : setNewList(sourceList);
    searchValue !== "" ? setSearchBool(false) : setSearchBool(true);
  }, [searchValue, sourceList, setNewList, searchBool]);

  return (
    <>
      <StyledSearchBar
        type="text"
        value={searchValue}
        placeholder={"Search games"}
        onChange={handleInputChange}
      />
      {searchBool ? (
        <SearchBarText text={`Todos os resultado (${listSize})`} />
      ) : listSize > 0 ? (
        <SearchBarText
          text={`Os resultados para "${searchValue}" (${listSize})`} />
      ) : (
        <SearchBarText text={`Nenhum resultado encontrado para "${searchValue}".`} />
      )}
    </>
  );
};

SearchBar.propTypes = {
  sourceList: PropTypes.array.isRequired,
  setList: PropTypes.func.isRequired,
  listSize: PropTypes.number.isRequired,
};

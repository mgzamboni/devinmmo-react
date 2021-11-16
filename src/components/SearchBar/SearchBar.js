import React, { useState } from "react";

export const SearchBar = ({gameList}) => {
  const [ searchValue, setSearchValue ] = useState("");

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  const filteredGames = gameList.filter((game) => {
      return gameList.title.includes(searchValue);
  })

  return (
    <div>
      <input
        type="text"
        value={searchValue}
        placeholder={"Search games"}
        onChange={handleInputChange}
      ></input>
      {console.log(filteredGames)}
    </div>
  );
};

import React from "react";
import { Header } from "../components/Header/Header";
import { NewsCard } from "../components/NewsCard";

export const NewsList = () => {

  const title = "Elyon’s Latest Patch Adds New Clan War Map, But The 10-Man Raid’s Gonna Be Late"

  const description = "When a “more suitable version” is ready, it will be made available."

  const img = "https://www.mmobomb.com/file/2021/11/elyon-update-new-clan-war-map-218x150.jpg"

  return (
    <div>
      <Header />
      {/* <NewsCard title={title} description={description} thumbnail={img} /> */}
    </div>
  );
};

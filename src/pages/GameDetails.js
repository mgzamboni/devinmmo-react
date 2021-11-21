import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Header } from "../components/Header";
import axios from "axios";
import { CommentForm } from "../components/CommentForm";
import { CommentBox } from "../components/CommentBox";
import { PicturesSlider } from "../components/PicturesSlider";
import { GameDetailsHeader } from "../components/GameDetailsHeader";
import { GameDetailsBody } from "../components/GameDetailsBody";
import { GameDetailsSystemReq } from "../components/GameDetailsSystemReq/GameDetailsSystemReq";

export const GameDetails = () => {
  const [comments, setComments] = useState([]);
  const [game, setGame] = useState();
  const { id } = useParams();

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://mmo-games.p.rapidapi.com/game",
      params: { id: id },
      headers: {
        "x-rapidapi-host": "mmo-games.p.rapidapi.com",
        "x-rapidapi-key": "268cc61283msh211ba6ef01d0beep16cdb6jsna3329cb584ea",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        setGame(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [id]);

  return (
    <div>
      <Header />
      {game != null ? (
        <>
          <GameDetailsHeader
            gameTitle={game.title}
            releaseDate={game.release_date}
          />
          <PicturesSlider
            screenshots={game.screenshots}
            gameTitle={game.title}
          />
          <br></br>
          <GameDetailsBody
            genre={game.genre}
            platform={game.platform}
            description={game.description}
          />
          <GameDetailsSystemReq
            os={game.minimum_system_requirements.os}
            processor={game.minimum_system_requirements.processor}
            memory={game.minimum_system_requirements.memory}
            graphics={game.minimum_system_requirements.graphics}
            storage={game.minimum_system_requirements.storage}
          />
          <CommentForm
            gameTitle={game.title}
            setComments={setComments}
          ></CommentForm>
          <CommentBox gameTitle={game.title} comments={comments} />
        </>
      ) : (
        <p>Info n disponível</p>
      )}
    </div>
  );
};

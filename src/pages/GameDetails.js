import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Header } from "../components/Header";
import { CommentForm } from "../components/CommentForm";
import { CommentBox } from "../components/CommentBox";
import { PicturesSlider } from "../components/PicturesSlider";
import { GameDetailsHeader } from "../components/GameDetailsHeader";
import { GameDetailsBody } from "../components/GameDetailsBody";
import { GameDetailsSystemReq } from "../components/GameDetailsSystemReq";
import { getGameData } from "../services/axios-service";
import { LoadingAnimation } from "../components/LoadingAnimation";

export const GameDetails = () => {
  const [comments, setComments] = useState([]);
  const [game, setGame] = useState();
  const [error, setError] = useState(0);
  const { id } = useParams();

  useEffect(() => {
    let mounted = true;
    getGameData("game", id)
      .then((data) => {
        if (mounted) {
          setGame(data);
        }
      })
      .catch(function (err) {
        setError(err.response.status);
      });

      return () => (mounted = false);
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
      ) : error === 0 ? (
        <LoadingAnimation />
      ) : (
        <p>Desculpe, não foi possível carregar a página!</p>
      )}
    </div>
  );
};

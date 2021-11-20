import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Header } from "../components/Header";
import axios from "axios";
import { CommentForm } from "../components/CommentForm";
import { CommentBox } from "../components/CommentBox";
import { PicturesSlider } from "../components/PicturesSlider/PicturesSlider";
export const GameDetails = () => {
  const [comments, setComments] = useState([]);
  const [game, setGame] = useState();
  const { id } = useParams();

  // useEffect(() => {
  //   console.log("GAME DETAILS: "+comments);
  // }, [comments]);

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

  // console.log("is there any game? "+game);
  // console.log(game.minimum_system_requirements)
  return (
    <div>
      <Header />
      <p>Game Details</p>
      {game != null ? (
        <>
          <h1>{game.title}</h1>
          <h2>{game.release_date}</h2>
          <img src={game.thumbnail} alt={game.title} />
          <br />
          <PicturesSlider screenshots={game.screenshots} gameTitle={game.title} />
          <h3>Genero: {game.genre}</h3>
          <h3>Plataforma: {game.platform}</h3>
          <br />
          <p>Descrição: {game.description.replace(/(<([^>]+)>)/gi, "")}</p>
          <br />
          <section>
            <p>Sistema Operacional: {game.minimum_system_requirements.os}</p>
            <p>Processador: {game.minimum_system_requirements.processor}</p>
            <p>Memória: {game.minimum_system_requirements.memory}</p>
            <p>Gráficos: {game.minimum_system_requirements.graphics}</p>
            <p>Espaço em disco: {game.minimum_system_requirements.storage}</p>
          </section>
          <p></p>
        </>
      ) : (
        <p>Info n disponível</p>
      )}
      {game != null && (
        <CommentForm
          gameTitle={game.title}
          setComments={setComments}
        ></CommentForm>
      )}
      {game != null && <CommentBox gameTitle={game.title} comments={comments} />}
    </div>
  );
};

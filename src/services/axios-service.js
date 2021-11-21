import axios from "axios";

const instance = axios.create({
  baseURL: "https://mmo-games.p.rapidapi.com",
  headers: {
    "Content-Type": "application/json",
    "x-rapidapi-host": "mmo-games.p.rapidapi.com",
    "x-rapidapi-key": "268cc61283msh211ba6ef01d0beep16cdb6jsna3329cb584ea",
  },
});

export const getDataList = (url) => {
    return instance.get(url).then(response => {
        return response.data
    })
}

export const getGameData = (url, gameId) => {
    return instance.get(url, {params: {id: gameId}}).then(response => {
        return response.data
    })
}
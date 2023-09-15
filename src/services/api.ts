import axios from "axios";

export const api = axios.create({
  baseURL: "https://explorer-rocketmovies.onrender.com",
});

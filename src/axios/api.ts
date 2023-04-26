import axios from "axios";

const TS = import.meta.env.VITE_TS;
const API_KEY = import.meta.env.VITE_PUBLIC_API_KEY;
const HASH = import.meta.env.VITE_HASH;

export const api = axios.create({
  baseURL: "http://gateway.marvel.com/v1/public/",
  params: {
    "apikey": API_KEY,
    "ts": TS,
    "hash": HASH
  }
});

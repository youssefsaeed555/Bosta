import axios from "axios";

const BOSTA_API = axios.create({
  baseURL: "https://tracking.bosta.co",
});

export default BOSTA_API;

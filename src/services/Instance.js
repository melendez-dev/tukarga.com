import axios from "axios";

// create instance with axios
export const instanceOficios = axios.create({
  baseURL: "https://moscu.oficios.co/",
});

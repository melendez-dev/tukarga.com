import axios from "axios";

// create instance with axios
export const instanceOficios = axios.create({
  baseURL: "https://moscu.oficios.co/",
});

export const instanceDelivery = axios.create({
  baseURL: "https://api.delivery.iguarayalabs.com/",
});

export const instanceOficiosApi = axios.create({
  baseURL: "https://api.oficios.co/",
});

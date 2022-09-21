import { instanceOficios, instanceOficiosApi } from "./Instance";

export const postForm = (data) => {
  return instanceOficios.post(`professional/registry`, data);
};

export const postLoginDelivery = (data) => {
	return instanceOficiosApi.post(`app/login`, data);
}

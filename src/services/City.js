import { instanceOficios } from "./Instance";

export const getCities = () => {
  return instanceOficios.get(`cities`);
};

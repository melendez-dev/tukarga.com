import { instanceOficios } from "./Instance";

export const postForm = (data) => {
  return instanceOficios.post(`professional/registry`, data);
};


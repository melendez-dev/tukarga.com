import { instanceOficios } from "./Instance";

export const postForm = () => {
  return instanceOficios.post(`professional/registry`);
};


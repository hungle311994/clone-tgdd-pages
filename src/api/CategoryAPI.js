import { api } from "./api";

const getCategoryAPI = () => {
  return api("GET", "categorys/", null);
};

export { getCategoryAPI };

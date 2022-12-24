import { api } from "./api";

const getManufacturerAPI = () => {
  return api("GET", "manufacturers", null);
};

export { getManufacturerAPI };

import Axios from "axios";

const axiosClient = Axios.create({
  baseURL: `http://localhost:8080/api/v1/`,
  headers: {
    "content-type": "application/json",
  },
});
export const api = (method, endpoint, payload) => {
  return axiosClient(endpoint, { method: method, data: payload })
    .then((res) => {
      return res;
    })
    .catch((error) => {
      console.log(error);
    });
};

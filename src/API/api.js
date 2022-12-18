import axios from "axios";

const axiosClient = axios.create({
  baseURL: "http://localhost:8080/api/v1/",
  
  headers: {
    // "Content-Type": "application/json; charset=UTF-8",
  },
});

export const api = (method, endpoint, payload) => {
  return axiosClient(endpoint, { method: method, data: payload })
    .then((response) => {
      //   console.log("api");
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
};



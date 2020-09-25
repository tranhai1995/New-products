import axios from "axios";

export const data = axios
  .get(`https://5dfa38d938678a00145f9f3e.mockapi.io/Project`)
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  })
  .then(function () {});

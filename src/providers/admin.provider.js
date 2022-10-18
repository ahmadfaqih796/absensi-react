import axios from "axios";
import {BASE_URL} from "./helper.provider"
export const SigninAdminProvider = (username, password) => {
  // console.log({ username, password });
  return new Promise((resolve, reject) => {
    axios
      .post(BASE_URL + "/v1/admin/login", {
        username,
        password,
      })
      .then(function (response) {
        resolve(response);
      })
      .catch(function (error) {
        reject(error);
      });
  });
};
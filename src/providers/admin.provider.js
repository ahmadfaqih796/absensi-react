import axios from "axios";
import BASE_URL from "./helper.provider"
export const SigninAdminProvider = (email, password) => {
  // console.log({ email, password });
  return new Promise((resolve, reject) => {
    axios
      .post(BASE_URL + "/v1/admin/login", {
        email,
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
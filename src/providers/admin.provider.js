import axios from "axios";
import { BASE_URL } from "./helper.provider";

export const SigninAdminProvider = (username, password) => {
  // console.log({ username, password });
  return new Promise((resolve, reject) => {
    axios
      .post(BASE_URL + "/admin/login", {
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

export const getAllKaryawan = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(BASE_URL + "/admin")
      .then((response) => resolve(response))
      .catch((err) => reject(err));
  });
};

export const deleteKaryawan = (nik) => {
  return new Promise((resolve, reject) => {
    axios
      .delete(BASE_URL + `/admin/search/${nik}`)
      .then((response) => resolve(response))
      .catch((err) => reject(err));
  });
};
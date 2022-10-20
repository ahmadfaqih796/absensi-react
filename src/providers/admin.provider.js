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

export const createKaryawan = (karyawan) => {
	let payload = {...karyawan}
  return new Promise((resolve, reject) => {
    axios
      .post(BASE_URL + "/admin/register", payload)
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });
};

export const updateKaryawan = (nik, karyawan) => {
	let payload = {...karyawan}
	return new Promise((resolve, reject) => {
		axios
		.put(BASE_URL + `/admin/search/${nik}`, payload)
		.then((res) => resolve(res))
		.catch((err) => reject(err))
	})
}

import axios from "axios";
import { Authorized, BASE_URL } from "./helper.provider";

export const SigninAdminProvider = (username, password) => {
  // console.log({ username, password });
  return new Promise((resolve, reject) => {
		const payload = {username, password}
		const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    axios
      .post(BASE_URL + "/login", payload, config)
      .then(function (response) {
        resolve(response);
      })
      .catch(function (error) {
        reject(error);
      });
  });
};

export const getAllKaryawan = (halaman) => {
  return new Promise((resolve, reject) => {
    axios
      .get(BASE_URL + `/admin?page=${halaman}`, Authorized)
      .then((response) => resolve(response))
      .catch((err) => reject(err));
  });
};

export const getDetailKaryawan = (nik) => {
  return new Promise((resolve, reject) => {
    axios
      .get(BASE_URL + `/admin/search/${nik}`, Authorized)
      .then((response) => resolve(response))
      .catch((err) => reject(err));
  });
};

export const deleteKaryawan = (nik) => {
  return new Promise((resolve, reject) => {
    axios
      .delete(BASE_URL + `/admin/search/${nik}`, Authorized)
      .then((response) => resolve(response))
      .catch((err) => reject(err));
  });
};

export const createKaryawan = (karyawan) => {
	let payload = {...karyawan}
  return new Promise((resolve, reject) => {
    axios
      .post(BASE_URL + "/admin/register", payload, Authorized)
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });
};

export const updateKaryawan = (nik, karyawan) => {
	let payload = {...karyawan}
	return new Promise((resolve, reject) => {
		axios
		.put(BASE_URL + `/admin/search/${nik}`, payload, Authorized)
		.then((res) => resolve(res))
		.catch((err) => reject(err))
	})
}

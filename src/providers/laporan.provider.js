import axios from "axios";
import { Authorized, BASE_URL } from "./helper.provider";

export const getAllLaporan = (halaman, tanggal) => {
  return new Promise((resolve, reject) => {
    axios
      .get(BASE_URL + `/lapor?page=${halaman}&tanggal=${tanggal}`, Authorized)
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });
};

export const createLaporan = (laporan) => {
  let payload = { ...laporan };
  return new Promise((resolve, reject) => {
    axios
      .post(BASE_URL + "/lapor", payload, Authorized)
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });
};
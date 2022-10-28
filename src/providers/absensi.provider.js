import axios from "axios"
import { BASE_URL } from "./helper.provider"


// mendapatkan semua total data absensi
export const getTotalAbsensi = (tanggal) => {
  return new Promise((resolve, reject) => {
    axios
      .get(BASE_URL + `/absen?page=1&tanggal=${tanggal}`)
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });
};

// mendapatkan semua data absensi
export const getAllAbsensi = (halaman, tanggal) => {
  return new Promise((resolve, reject) => {
    axios
      .get(BASE_URL + `/absen?page=${halaman}&tanggal=${tanggal}`)
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });
};

// membuat absensi masuk method post
export const createAbsensiMasuk = (absensi) => {
	let payload = {...absensi}
	return new Promise ((resolve, reject) => {
		axios
		.post(BASE_URL + `/absen/masuk`, payload)
		.then((response) => resolve(response))
		.catch((err) => reject(err))
	})
}

// membuat absensi masuk method post
export const updateAbsensiMasuk = (absensi) => {
	let payload = {...absensi}
	return new Promise ((resolve, reject) => {
		axios
		.put(BASE_URL + `/absen/masuk`, payload)
		.then((response) => resolve(response))
		.catch((err) => reject(err))
	})
}

// membuat absensi pulang method post
export const createAbsensiPulang = (absensi) => {
	let payload = {...absensi}
	return new Promise ((resolve, reject) => {
		axios
		.post(BASE_URL + `/absen/pulang`, payload)
		.then((response) => resolve(response))
		.catch((err) => reject(err))
	})
}
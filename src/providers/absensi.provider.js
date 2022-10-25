import axios from "axios"
import { Authorized, BASE_URL } from "./helper.provider"

export const getAllAbsensiMasuk = (halaman) => {
	return new Promise ((resolve, reject) => {
		axios
		.get(BASE_URL + `/absen?page=${halaman}`, Authorized)
		.then((response) => resolve(response))
		.catch((err) => reject(err))
	})
}
export const createAbsensiMasuk = (absensi) => {
	let payload = {...absensi}
	return new Promise ((resolve, reject) => {
		axios
		.post(BASE_URL + `/absen/masuk`, payload, Authorized)
		.then((response) => resolve(response))
		.catch((err) => reject(err))
	})
}
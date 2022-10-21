export const BASE_URL = "http://localhost:3001";
export const Authorized = {
	headers: {
		"Content-Type": "application/json",
		Authorization : localStorage.getItem("token")
	},
};
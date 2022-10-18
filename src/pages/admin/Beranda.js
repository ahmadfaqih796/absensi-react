import { useNavigate } from "react-router-dom";

const Beranda = () => {
	const navigate = useNavigate()
	const handleLogout = (e) => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  return(
		<>
			<h1>ini beranda admin</h1>
			<button onClick={handleLogout} >Logout</button>
		</>
	)
}
export default Beranda

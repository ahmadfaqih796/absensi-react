import "../../assets/css/user/statik.css";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";

const Beranda = () => {
  const navigate = useNavigate();
  const handleLogout = (e) => {
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    localStorage.removeItem("IS_LOGIN");
    navigate("/login");
  };
  return (
    <>
      <Navbar logout={handleLogout} />
      <legend>Home</legend>
      <main className="konten">
        <section className="statik">
          <article>
            <i class="fa-solid fa-user"></i>
						<h3>20</h3>
            <h2>Karyawan</h2>
          </article>
          <article>
            <i class="fa-solid fa-business-time"></i>
						<h3>10</h3>
						<h2>Absen</h2>
          </article>
          <article>
            <i class="fa-solid fa-book"></i>
						<h3>31</h3>
						<h2>Laporan</h2>
          </article>
        </section>
      </main>
    </>
  );
};
export default Beranda;

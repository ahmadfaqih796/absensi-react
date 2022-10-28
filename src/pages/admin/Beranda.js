import "../../assets/css/user/statik.css";

import Navbar from "../../components/Navbar";

const BerandaAdmin = () => {
  return (
    <>
      <Navbar />
      <main className="konten">
        <legend>Home</legend>
        <section className="statik">
          <article>
            <i className="fa-solid fa-user"></i>
            <h3>20</h3>
            <h2>Karyawan</h2>
          </article>
          <article>
            <i className="fa-solid fa-business-time"></i>
            <h3>10</h3>
            <h2>Absen</h2>
          </article>
          <article>
            <i className="fa-solid fa-book"></i>
            <h3>31</h3>
            <h2>Laporan</h2>
          </article>
        </section>
      </main>
    </>
  );
};
export default BerandaAdmin;

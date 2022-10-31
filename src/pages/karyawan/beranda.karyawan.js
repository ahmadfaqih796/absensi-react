import Navbar from "../../components/Navbar";

const BerandaKaryawan = () => {
  const nik = localStorage.getItem("nik");
  return (
    <>
      <Navbar nik={nik} />
      <main className="konten">
        <legend>Karyawan</legend>
        <h1>Selamat datang di halaman Karyawan</h1>
      </main>
    </>
  );
};
export default BerandaKaryawan;

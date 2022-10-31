import Navbar from "../../components/Navbar";

const BerandaSpv = () => {
  const nik = localStorage.getItem("nik");
  return (
    <>
      <Navbar nik={nik} />
      <main className="konten">
        <legend>SPV</legend>
        <h1>Selamat datang di halaman SPV</h1>
      </main>
    </>
  );
};
export default BerandaSpv;

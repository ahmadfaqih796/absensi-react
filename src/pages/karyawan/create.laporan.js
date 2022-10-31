import "../../assets/css/user/form.css";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../../components/Navbar";
import { createLaporan } from "../../providers/laporan.provider";

const defaultLaporan = {
  tugas: "",
  klien: "",
  jamMulai: "",
  jamAkhir: "",
  keterangan: "",
};
const CreateLaporanKaryawan = () => {
	const params = useParams()
  const navigate = useNavigate();
  const [laporan, setLaporan] = useState(defaultLaporan);
  const handleLaporan = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setLaporan((values) => ({ ...values, [name]: value }));
  };
  const handleTambahLaporan = (laporan, e) => {
    createLaporan(laporan, e).then((response) => {
      alert("data berhasil ditambah");
    });
    navigate("/karyawan/laporan/" + params.nik);
  };
  return (
    <>
      <Navbar nik={params.nik}/>
      <main className="konten">
        <legend>Create Laporan</legend>
        <a href={"/karyawan/laporan/" + params.nik} className="tambah">
          &#60;
        </a>
        <form className="karyawan">
          <div className="grup">
            <label htmlFor="tugas">Tugas</label>
            <input
              type="text"
              name="tugas"
              value={laporan.tugas}
              onChange={handleLaporan}
            />
          </div>
          <div className="grup">
            <label htmlFor="klien">Klien</label>
            <input
              type="text"
              name="klien"
              value={laporan.klien}
              onChange={handleLaporan}
            />
          </div>

          <div className="grup">
            <label htmlFor="jamMulai">Jam Mulai</label>
            <input
              type="time"
              name="jamMulai"
              value={laporan.jamMulai}
              onChange={handleLaporan}
            />
          </div>

					<div className="grup">
            <label htmlFor="jamAkhir">Jam Akhir</label>
            <input
              type="time"
              name="jamAkhir"
              value={laporan.jamAkhir}
              onChange={handleLaporan}
            />
          </div>

          <div className="grup">
            <label htmlFor="keterangan">Keterangan</label>
            <input
              type="text"
              name="keterangan"
              value={laporan.keterangan}
              onChange={handleLaporan}
            />
          </div>
        </form>
        <button onClick={(e) => handleTambahLaporan(laporan, e)}>Kirim</button>
      </main>
    </>
  );
};
export default CreateLaporanKaryawan;

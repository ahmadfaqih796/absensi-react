import Navbar from "../../../components/Navbar";
import { useEffect, useState } from "react";
import { getAllAbsensi } from "../../../providers/absensi.provider";
import moment from "moment/moment";
import CetakAbsensi from "./cetak.absensi";

const DataAbsensi = () => {
  const [absensi, setAbsensi] = useState([]);
  const halaman = 1;
	const dateTime = new Date()
	const [tanggal, setTanggal] = useState(moment(dateTime).format("YYYY-MM-DD"))

  useEffect(() => {
    getAllAbsensi(halaman, tanggal)
      .then((response) => {
        setAbsensi(response.data.data);
      })
      .catch((err) => {
        alert(err.message);
      });
  }, [halaman, tanggal]);
  return (
    <>
      <Navbar />
      <main className="konten">
        <legend>Data Absensi</legend>
				<form className="search">
          <input
            type="text"
            name="tanggal"
            value={tanggal}
            onChange={(e) => setTanggal(e.target.value)}
          />
					<CetakAbsensi absensi={absensi} tanggal={tanggal} />
        </form>
        <table>
          <thead>
            <tr>
              <th>No</th>
              <th>Kode Absen</th>
              <th>NIK</th>
              <th>Nama</th>
              <th>Jam Masuk</th>
              <th>Jam Pulang</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {absensi.map((data, index) => (
              <tr id="data" key={index}>
                <td>{index + 1}</td>
                <td>{data.kodeAbsen}</td>
                <td>{data.nik}</td>
                <td>{data.name}</td>
                <td>{data.jamMasuk}</td>
                <td>{data.jamPulang}</td>
                <td>{data.jamMasuk && !data.jamPulang ? "belum valid" : "valid"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </>
  );
};
export default DataAbsensi;

import Navbar from "../../../components/Navbar";
import { useEffect, useState } from "react";
import { getAllLaporan } from "../../../providers/laporan.provider";
import moment from "moment/moment";

const DataLaporanAdmin = () => {
  const [laporan, setLaporan] = useState([]);
  const dateTime = new Date();
  const halaman = 1;
  const hariIni = moment(dateTime).format("DD/MM/YYYY");
  const tanggal = moment(dateTime).format("YYYY-MM-DD");

  useEffect(() => {
    getAllLaporan(halaman, tanggal)
      .then((response) => {
        setLaporan(response.data.data);
      })
      .catch((err) => {
        alert(err.message);
      });
  }, [halaman, tanggal]);
  // const handleDelete = (nik, e) => {
  //   deleteKaryawan(nik).then(() => {
  //     alert("data berhasil dihapus");
  //   });
  // };

  return (
    <>
      <Navbar />
      <main className="konten">
        <legend>Laporan</legend>
        <h1>{hariIni}</h1>
        <a href="/admin/laporan/tambah" className="tambah">
          +
        </a>
        <table>
          <thead>
            <tr>
              <th rowSpan={2}>No</th>
              <th rowSpan={2}>NIK</th>
              <th rowSpan={2}>Nama</th>
              <th rowSpan={2}>Tugas</th>
            </tr>
          </thead>
          <tbody>
            {laporan.map((data, index) => (
              <tr id="data" key={index}>
                <td>{index + 1}</td>
                <td>{data.nik}</td>
                <td>{data.name}</td>
                <td>{data.tugas}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </>
  );
};
export default DataLaporanAdmin;

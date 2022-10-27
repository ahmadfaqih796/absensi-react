import Navbar from "../../../components/Navbar";
import { useEffect, useState } from "react";
import {
  getAllLaporan,
  updateStatusLaporan,
} from "../../../providers/laporan.provider";
import moment from "moment/moment";
import { useNavigate } from "react-router-dom";

const DataLaporanAdmin = () => {
  const navigate = useNavigate();
  const [laporan, setLaporan] = useState([]);
  const dateTime = new Date();
  const halaman = 1;
  const hariIni = moment(dateTime).format("DD/MM/YYYY");
  const tanggal = moment(dateTime).format("YYYY-MM-DD");

  const handleUpdateLaporan = (nik, kodeLaporan, e) => {
    updateStatusLaporan(nik, kodeLaporan, e).then((response) => {
      alert("data berhasil diupdate");
      console.log(response.data.data);
    });
    navigate("/admin/laporan");
  };

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
              <th rowSpan={2}>Kode</th>
              <th rowSpan={2}>NIK</th>
              <th rowSpan={2}>Nama</th>
              <th rowSpan={2}>Klien</th>
              <th rowSpan={2}>Tugas</th>
              <th rowSpan={2}>Jam Mulai</th>
              <th rowSpan={2}>Jam Akhir</th>
              <th rowSpan={2}>Status</th>
            </tr>
          </thead>
          <tbody>
            {laporan.map((data, index) => (
              <tr id="data" key={index}>
                <td>{index + 1}</td>
                <td>{data.kodeLaporan}</td>
                <td>{data.nik}</td>
                <td>{data.name}</td>
                <td>{data.klien}</td>
                <td>{data.tugas}</td>
                <td>{data.jamMulai}</td>
                <td>{data.jamAkhir}</td>
                <td>
                  {data.status ? (
                    <i style={{ color: "green" }} className="fa-solid fa-check"></i>
                  ) : (
                    <a
                      style={{ fontSize: "20px", color: "red" }}
                      href="/admin/laporan"
                      id="delete"
                      onClick={(e) =>
                        handleUpdateLaporan(data.nik, data.kodeLaporan, e)
                      }
                    >
                      <i class="fa-solid fa-arrows-rotate"></i>
                    </a>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </>
  );
};
export default DataLaporanAdmin;

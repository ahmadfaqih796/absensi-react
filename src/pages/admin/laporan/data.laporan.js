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
  const [tanggal, setTanggal] = useState(moment(dateTime).format("YYYY-MM-DD"));
  const halaman = 1;

  const handleUpdateLaporan = (nik, kodeLaporan, e) => {
    updateStatusLaporan(nik, kodeLaporan, e).then((response) => {
      e.preventDefault();
      alert("laporan berhasil ditambah")
      console.log(response.data.data);
			setLaporan(response.data.data);
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
        <form className="search">
          <input
            type="text"
            name="tanggal"
            value={tanggal}
            onChange={(e) => setTanggal(e.target.value)}
          />
        </form>
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
                    <i
                      style={{ color: "green" }}
                      className="fa-solid fa-check"
                    ></i>
                  ) : (
                    <a
                      style={{ fontSize: "20px", color: "red" }}
                      href="/admin/laporan"
                      id="delete"
                      onClick={(e) =>
                        handleUpdateLaporan(data.nik, data.kodeLaporan, e)
                      }
                    >
                      <i className="fa-solid fa-arrows-rotate"></i>
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

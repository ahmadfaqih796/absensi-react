import moment from "moment/moment";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar";
import { getLaporanUser } from "../../providers/laporan.provider";

const LaporanKaryawan = () => {
  const params = useParams();
  const [laporan, setLaporan] = useState([]);
  const dateTime = new Date();
  const [tanggal, setTanggal] = useState(moment(dateTime).format("YYYY-MM-DD"));
  const nik = params.nik;
  const halaman = 1;
  useEffect(() => {
    getLaporanUser(nik, halaman, tanggal)
      .then((response) => {
        setLaporan(response.data.data);
      })
      .catch((err) => {
        alert(err.message);
      });
  }, [nik, halaman, tanggal]);
  return (
    <>
      <Navbar nik={nik} />
      <a
        href={"/karyawan/laporan/" + params.nik + "/create"}
        className="tambah"
      >
        +
      </a>
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
                    <i className="fa-solid fa-arrows-rotate"></i>
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
export default LaporanKaryawan;

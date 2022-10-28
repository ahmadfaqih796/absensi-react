import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar";
import { getLaporanUser } from "../../providers/laporan.provider";

const LaporanKaryawan = () => {
  const params = useParams();
  const [laporan, setLaporan] = useState([]);
  const nik = "20221009";
  useEffect(() => {
    getLaporanUser()
      .then((response) => {
        setLaporan(response.data.data);
        console.log(response.data.data);
      })
      .catch((err) => {
        alert(err.message);
      });
  }, [nik]);
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
        <legend>Hello Laporan</legend>
        {laporan.map((data, index) => (
          <ul key={index}>
            <h1>{data.kodeLaporan}</h1>
            <h1>{data.tugas}</h1>
          </ul>
        ))}
      </main>
    </>
  );
};
export default LaporanKaryawan;

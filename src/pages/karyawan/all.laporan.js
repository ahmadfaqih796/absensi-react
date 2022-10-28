import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import { getLaporanUser } from "../../providers/laporan.provider";

const LaporanKaryawan = () => {
	
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
      <Navbar />
      <h1>Hello Laporan</h1>
      {laporan.map((data, index) => (
        <ul key={index}>
          <h1>{data.kodeLaporan}</h1>
					<h1>{data.tugas}</h1>
        </ul>
      ))}
    </>
  );
};
export default LaporanKaryawan;

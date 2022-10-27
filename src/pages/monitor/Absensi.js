import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  createAbsensiMasuk,
  createAbsensiPulang,
  getAllAbsensi,
} from "../../providers/absensi.provider";

const Absensi = () => {

  const navigate = useNavigate();
  const [nik, setNik] = useState("");
  const [absensi, setAbsensi] = useState([]);
  const halaman = 1;
  const tanggal = "2022-10-26";

  useEffect(() => {
    getAllAbsensi(halaman, tanggal)
      .then((response) => {
        setAbsensi(response.data.data);
      })
      .catch((err) => {
        alert(err.message);
      });
  }, [halaman]);

  const handleTambahAbsensiMasuk = (absensi, e) => {
    createAbsensiMasuk(absensi, e).then((response) => {
      alert("anda sudah absen masuk");
    });
    navigate("/absensi");
  };

  const handleTambahAbsensiPulang = (absensi, e) => {
    createAbsensiPulang(absensi, e).then((response) => {
      alert("anda sudah absen pulang");
    });
    navigate("/absensi");
  };

  return (
    <>
      <h1>Silahkan Absensi</h1>
      <div className="flex">
        <form className="search">
          <input
            type="text"
            name="nik"
            value={nik}
            onChange={(e) => setNik(e.target.value)}
          />
          <input
            type="submit"
            onClick={(e) => handleTambahAbsensiMasuk({ nik: nik }, e)}
          />
        </form>
        <form className="search">
          <input
            type="text"
            name="nik"
            onChange={(e) => setNik(e.target.value)}
          />
          <input
            type="submit"
            value={"Keluar"}
            onClick={(e) => handleTambahAbsensiPulang({ nik: nik }, e)}
          />
        </form>
      </div>
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
              <td>{data.status ? "valid" : "belum valid"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
export default Absensi;

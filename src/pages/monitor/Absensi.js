import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  createAbsensiMasuk,
  getAllAbsensi,
} from "../../providers/absensi.provider";

const Absensi = () => {
  // const videoRef = useRef(null);

  // const getVideo = () => {
  //   navigator.mediaDevices
  //     .getUserMedia({
  //       video: { width: 1920, height: 1080 },
  //     })
  //     .then((stream) => {
  //       let video = videoRef.current;
  //       video.srcObject = stream;
  //       video.play();
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  const navigate = useNavigate();
  const [nik, setNik] = useState("");
  const [absensi, setAbsensi] = useState([]);
  const halaman = 1;
  const tanggal = "2022-10-25";

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
      alert("anda sudah absen");
    });
    navigate("/absensi");
  };

  return (
    <>
      <h1>Silahkan Absensi</h1>
      <form className="search">
        <input
          type="text"
          name="nik"
          value={nik}
          onChange={(e) => setNik(e.target.value)}
        />
        <input
          type="submit"
          value={"submit"}
          onClick={(e) => handleTambahAbsensiMasuk({ nik: nik }, e)}
        />
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
              <td>{data.status ? "valid" : "belum valid"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
export default Absensi;

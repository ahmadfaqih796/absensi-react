import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createAbsensiMasuk } from "../../providers/absensi.provider";

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

  const defaultAbsensi = {
    nik: "20221006",
  };
  const navigate = useNavigate();
  const [absensi, setAbsensi] = useState(defaultAbsensi);

  const handleAbsensi = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setAbsensi((values) => ({ ...values, [name]: value }));
  };

  const handleTambahAbsensiMasuk = (absensi, e) => {
    createAbsensiMasuk(absensi, e).then((response) => {
      alert("data berhasil ditambah");
    });
    navigate("/admin/absensi");
  };

  return (
    <>
      <h1>Silahkan Absensi</h1>
      <form>
        <input type="text" name="nik" value={absensi.nik} onChange={handleAbsensi} />
        <input type="submit" value={"submit"} onClick={(e) => handleTambahAbsensiMasuk(absensi, e)}/>
      </form>
      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Kode Absen</th>
            <th>NIK</th>
            <th>Nama</th>
            <th>Jam Masuk</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </>
  );
};
export default Absensi;

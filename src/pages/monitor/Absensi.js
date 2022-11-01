import moment from "moment/moment";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  createAbsensiMasuk,
  createAbsensiPulang,
  getAllAbsensi,
} from "../../providers/absensi.provider";
import NavigasiMonitor from "./Navigasi";
import QRcode from "qrcode";
import { QrReader } from "react-qr-reader";

const Absensi = () => {
  const navigate = useNavigate();
  const [nik, setNik] = useState("");
  const [scanResultWebCam, setScanResultWebCam] = useState("");
  const [absensi, setAbsensi] = useState([]);
  const halaman = 1;
  const dateTime = new Date();
  const tanggal = moment(dateTime).format("YYYY-MM-DD");

  useEffect(() => {
    getAllAbsensi(halaman, tanggal)
      .then((response) => {
        setAbsensi(response.data.data);
      })
      .catch((err) => {
        alert(err.message);
      });
  }, [halaman, tanggal]);

  const generateQRcode = async () => {
    try {
      const res = await QRcode.toDataURL("test qrcode generation");
      console.log(res);
    } catch (error) {}
  };

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
      <NavigasiMonitor />
      <main className="konten">
        <legend>Silahkan Absensi</legend>
        <QrReader
          scanDelay={300}
          className="video"
          constraints={{ facingMode: "user" }}
          onResult={(result, error) => {
            if (!!result) {
              setScanResultWebCam(result?.text);
            }
            if (!!error) {
              // console.info(error);
            }
          }}
        />
        <h3>NIK : {scanResultWebCam}</h3>
        {scanResultWebCam ? (
          <button
            onClick={(e) =>
              handleTambahAbsensiMasuk({ nik: scanResultWebCam }, e)
            }
          >
            Silahkan klik Absen
          </button>
        ) : null}
        <div className="flex">
          <form className="search">
            <input
              type="text"
              name="qrcode"
              onChange={(e) => setNik(e.target.value)}
            />
            <input
              type="submit"
              value={"qrkode"}
              onClick={() => generateQRcode()}
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
              value={"Masuk"}
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
        <p className="center">
          Jam masuk dimulai pada pukul 07:00 WIB dan jam pulang di mulai pukul
          17:00 WIB
        </p>
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
      </main>
    </>
  );
};
export default Absensi;

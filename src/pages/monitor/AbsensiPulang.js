import moment from "moment/moment";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  createAbsensiPulang,
  getAllAbsensi,
} from "../../providers/absensi.provider";
import NavigasiMonitor from "./Navigasi";
import { QrReader } from "react-qr-reader";

const AbsensiPulang = () => {
  const navigate = useNavigate();
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

  const handleTambahAbsensiPulang = (absensi, e) => {
    createAbsensiPulang(absensi, e).then((response) => {
      alert("anda sudah absen pulang");
    });
    navigate("/absensi-pulang");
  };

  return (
    <>
      <NavigasiMonitor />
      <main className="konten">
        <legend>Absensi Pulang</legend>
        <p className="center">
          Jam masuk dimulai pada pukul 07:00 WIB, apabila absen jam masuk diatas
          jam 08:00 WIB maka akan dinyatakan terlambat dan jam pulang di mulai pukul
          17:00 WIB
        </p>
      </main>
      <div className="flex-absen">
        <section className="card">
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
          <h3 className="center">NIK : {scanResultWebCam}</h3>
          <form>
            {scanResultWebCam ? (
              <button
                onClick={(e) =>
                  handleTambahAbsensiPulang({ nik: scanResultWebCam }, e)
                }
              >
                Silahkan klik Absen
              </button>
            ) : null}
          </form>
        </section>
        <section className="card">
          <table>
            <thead>
              <tr>
                <th>No</th>
                <th>Kode Absen</th>
                <th>NIK</th>
                <th>Nama</th>
                <th>Jam Pulang</th>
                <th>Keterangan</th>
              </tr>
            </thead>
            <tbody>
              {absensi.map((data, index) => (
                <tr id="data" key={index}>
                  <td>{index + 1}</td>
                  <td>{data.kodeAbsen}</td>
                  <td>{data.nik}</td>
                  <td>{data.name}</td>
                  <td>{data.jamPulang}</td>
                  <td>{data.jamPulang > "17:00:00" ? "Pulang" : ""}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </div>
    </>
  );
};
export default AbsensiPulang;

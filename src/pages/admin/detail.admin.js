import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import { getDetailKaryawan } from "../../providers/admin.provider";
import { Posisi } from "./karyawan/data.karyawan";

const AkunAdmin = () => {
  const nik = localStorage.getItem("nik");
  const [karyawan, setKaryawan] = useState("");
  useEffect(() => {
    getDetailKaryawan(nik).then((response) => setKaryawan(response.data.data));
  }, [nik]);
  return (
    <>
      <Navbar nik={nik} />
      <main className="konten">
        <legend>{karyawan.name}</legend>
        <h1>
          Hello {karyawan.name} dengan jenis kelamin {karyawan.gender}, saat ini
          kamu menjabat sebagai{" "}
          <Posisi spv={karyawan.isSPV} admin={karyawan.isAdmin} /> di posisi{" "}
          {karyawan.departemen} dengan memilik NIK dengan nomor {karyawan.nik},
          alamat tinggal saat ini {karyawan.alamat} dan nomor telepon yang bisa
          dihubungi {karyawan.phone}.
        </h1>
        <a href={karyawan.qrcode} download>
          <img className="qrcode" src={karyawan.qrcode} alt="qrcode" />
        </a>
      </main>
    </>
  );
};
export default AkunAdmin;

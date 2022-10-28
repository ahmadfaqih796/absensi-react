import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar";
import { getDetailKaryawan } from "../../providers/admin.provider";
import { Posisi } from "../admin/karyawan/data.karyawan";

const BerandaKaryawan = () => {
  const params = useParams();
  const [karyawan, setKaryawan] = useState("");
  console.log(params.nik);
  useEffect(() => {
    getDetailKaryawan(params.nik).then((response) =>
      setKaryawan(response.data.data)
    );
  }, [params.nik]);
  return (
    <>
      <Navbar nik={karyawan.nik} />
      <main className="konten">
        <legend>
          <Posisi spv={karyawan.isSPV} admin={karyawan.isAdmin} />
        </legend>
        <h1>
          Hello {karyawan.name} dengan jenis kelamin {karyawan.gender}, saat ini
          kamu menjabat sebagai{" "}
          <Posisi spv={karyawan.isSPV} admin={karyawan.isAdmin} /> di posisi{" "}
          {karyawan.departemen} dengan memilik NIK dengan nomor {karyawan.nik},
          alamat tinggal saat ini {karyawan.alamat} dan nomor telepon yang bisa
          dihubungi {karyawan.phone}
        </h1>
      </main>
    </>
  );
};
export default BerandaKaryawan;

import "../../../assets/css/user/cetak.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../../components/Navbar";
import { getDetailKaryawan } from "../../../providers/admin.provider";
import CetakKaryawan from "./cetak.karyawan";

const DetailKaryawan = () => {
  const params = useParams();
  const [karyawan, setKaryawan] = useState([]);
  console.log(params.nik);
  useEffect(() => {
    getDetailKaryawan(params.nik).then((res) => {
      setKaryawan(res.data.data);
    });
  }, [params.nik]);
  return (
    <>
      <Navbar />
      <main className="konten">
        <legend>Detail</legend>
				<a href="/admin/karyawan" className="tambah">&#60;</a>
        <h1>{karyawan.name}</h1>
        <p>username :</p>
        <h1>{karyawan.username}</h1>
        <CetakKaryawan karyawan={karyawan} />
        <p>{JSON.stringify(karyawan)}</p>
      </main>
    </>
  );
};
export default DetailKaryawan;

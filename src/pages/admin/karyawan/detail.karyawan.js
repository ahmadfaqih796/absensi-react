import "../../../assets/css/user/cetak.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../../components/Navbar";
import { getDetailKaryawan } from "../../../providers/admin.provider";
import CetakKaryawan from "./cetak.karyawan";

const defaultKaryawan = {
  username: "",
  password: "",
  name: "",
  gender: "",
  departemen: "",
  phone: "",
  alamat: "",
	tanggalMasuk: "",
	isActive: ""
};

const DetailKaryawan = () => {
  const params = useParams();
  const [karyawan, setKaryawan] = useState(defaultKaryawan);
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
				<form className="karyawan">
          <div className="grup">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              value={karyawan.username}
              disabled
            />
          </div>
          <div className="grup">
            <label htmlFor="name">Nama</label>
            <input
              type="text"
              name="name"
              value={karyawan.name}
              disabled
            />
          </div>
          <div className="grup">
            <label htmlFor="gender">Jenis Kelamin</label>
            <input
              type="text"
              name="name"
              value={karyawan.gender === "L" ? "Laki-laki" : "Perempuan"}
              disabled
            />
          </div>

          <div className="grup">
            <label htmlFor="departemen">Departemen</label>
            <input
              type="text"
              name="departemen"
              value={karyawan.departemen}
              disabled
            />
          </div>

          <div className="grup">
            <label htmlFor="phone">No Handphone</label>
            <input
              type="number"
              name="phone"
              value={karyawan.phone}
              disabled
            />
          </div>
          <div className="grup">
            <label htmlFor="alamat">Alamat</label>
            <input
              type="text"
              name="alamat"
              value={karyawan.alamat}
              disabled
            />
          </div>
					<div className="grup">
            <label htmlFor="isActive">Status</label>
            <input
              type="text"
              name="isActive"
              value={karyawan.isActive ? "Aktif" : "Tidak Aktif"}
              disabled
            />
          </div>
					<div className="grup">
            <label htmlFor="tanggalMasuk">Tanggal Masuk</label>
            <input
              type="text"
              name="tanggalMasuk"
              value={karyawan.tanggalMasuk}
              disabled
            />
          </div>
					<div className="grup">
						<img className="qrcode" src={karyawan.qrcode} alt="qrcode" />
					</div>
        </form>
        <CetakKaryawan karyawan={karyawan} />
        {/* <p>{JSON.stringify(karyawan)}</p> */}
      </main>
    </>
  );
};
export default DetailKaryawan;

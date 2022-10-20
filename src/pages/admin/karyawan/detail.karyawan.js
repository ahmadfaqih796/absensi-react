import "../../../assets/css/user/cetak.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../../components/Navbar";
import logo from "../../../assets/image/logo-absensi.png";
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
      <main className="form">
        <legend>Create</legend>
        <form className="karyawan">
          <div className="grup">
            <label htmlFor="usernamede">Username</label>
            <input
              type="text"
              name="username"
              value={karyawan.username}
              onChange={handleKaryawan}
            />
          </div>
          <div className="grup">
            <label htmlFor="name">Nama</label>
            <input
              type="text"
              name="name"
              value={karyawan.name}
              onChange={handleKaryawan}
            />
          </div>
          <div className="grup">
            <label htmlFor="gender">Jenis Kelamin</label>
            <select
              name="gender"
              value={karyawan.gender}
              onChange={handleKaryawan}
            >
              <option value="L">Laki-laki</option>
              <option value="P">Perempuan</option>
            </select>
          </div>

          <div className="grup">
            <label htmlFor="departemen">Departemen</label>
            <input
              type="text"
              name="departemen"
              value={karyawan.username}
              onChange={handleKaryawan}
            />
          </div>
          <div className="grup">
            <label htmlFor="isAdmin">Admin</label>
            <input
              type="text"
              name="isAdmin"
              value={karyawan.username}
              onChange={handleKaryawan}
            />
          </div>

          <div className="grup">
            <label htmlFor="phone">Telepon</label>
            <input
              type="number"
              name="phone"
              value={karyawan.username}
              onChange={handleKaryawan}
            />
          </div>
          <div className="grup">
            <label htmlFor="alamat">Alamat</label>
            <input
              type="text"
              name="alamat"
              value={karyawan.username}
              onChange={handleKaryawan}
            />
          </div>
        </form>

        <h1>{karyawan.username}</h1>
        <CetakKaryawan karyawan={karyawan} />
        <p>{JSON.stringify(karyawan)}</p>
      </main>
    </>
  );
};
export default DetailKaryawan;

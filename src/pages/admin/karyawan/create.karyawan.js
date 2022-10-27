import "../../../assets/css/user/form.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../../components/Navbar";
import { createKaryawan } from "../../../providers/admin.provider";

const defaultKaryawan = {
  username: "",
  password: "12345",
  name: "",
  gender: "L",
  departemen: "IT",
  isAdmin: false,
  isSPV: false,
  phone: "091212",
  alamat: "jl.kesasar",
};
const CreateKaryawan = () => {
  const navigate = useNavigate();
  const [karyawan, setKaryawan] = useState(defaultKaryawan);

  const handleKaryawan = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setKaryawan((values) => ({ ...values, [name]: value }));
  };
  const handleTambahKaryawan = (karyawan, e) => {
    createKaryawan(karyawan, e).then((response) => {
      alert("data berhasil ditambah");
    });
    navigate("/admin/karyawan");
  };
  return (
    <>
      <Navbar />
      <main className="konten">
        <legend>Create</legend>
        <a href="/admin/karyawan" className="tambah">
          &#60;
        </a>
        <form className="karyawan">
          <div className="grup">
            <label htmlFor="username">Username</label>
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
            <label htmlFor="isSPV">Posisi</label>
            <select
              name="isSPV"
              value={karyawan.isSPV}
              onChange={handleKaryawan}
            >
              <option value={false}>Karyawan</option>
              <option value={true}>SPV</option>
            </select>
          </div>

          <div className="grup">
            <label htmlFor="departemen">Departemen</label>
            <input
              type="text"
              name="departemen"
              value={karyawan.departemen}
              onChange={handleKaryawan}
            />
          </div>

          <div className="grup">
            <label htmlFor="phone">No Handphone</label>
            <input
              type="number"
              name="phone"
              value={karyawan.phone}
              onChange={handleKaryawan}
            />
          </div>
          <div className="grup">
            <label htmlFor="alamat">Alamat</label>
            <input
              type="text"
              name="alamat"
              value={karyawan.alamat}
              onChange={handleKaryawan}
            />
          </div>
        </form>
        <button onClick={(e) => handleTambahKaryawan(karyawan, e)}>
          Tambah
        </button>
        {/* <p>{JSON.stringify(karyawan)}</p> */}
      </main>
    </>
  );
};
export default CreateKaryawan;

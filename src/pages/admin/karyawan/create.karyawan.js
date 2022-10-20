import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../../components/Navbar";
import { createKaryawan } from "../../../providers/admin.provider";

const defaultKaryawan = {
  username: "",
  password: "12345",
  name: "juzx",
  gender: "L",
  departemen: "IT",
  isAdmin: false,
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
        <form>
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
            <label htmlFor="departemen">Username</label>
            <input
              type="text"
              name="departemen"
              value={karyawan.username}
              onChange={handleKaryawan}
            />
          </div>
          <div className="grup">
            <label htmlFor="isAdmin">Username</label>
            <input
              type="text"
              name="isAdmin"
              value={karyawan.username}
              onChange={handleKaryawan}
            />
          </div>

          <div className="grup">
            <label htmlFor="phone">Username</label>
            <input
              type="number"
              name="phone"
              value={karyawan.username}
              onChange={handleKaryawan}
            />
          </div>
          <div className="grup">
            <label htmlFor="alamat">Username</label>
            <input
              type="text"
              name="alamat"
              value={karyawan.username}
              onChange={handleKaryawan}
            />
          </div>

          <button onClick={(e) => handleTambahKaryawan(karyawan, e)}>
            Tambah
          </button>
        </form>
        <p>{JSON.stringify(karyawan)}</p>
      </main>
    </>
  );
};
export default CreateKaryawan;

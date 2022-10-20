import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../../../components/Navbar";
import { updateKaryawan } from "../../../providers/admin.provider";

const defaultKaryawan = {
  username: "",
  password: "qwerty",
  name: "juzx",
  gender: "L",
  departemen: "IT",
  isSPV: true,
  isAdmin: false,
  phone: "091212",
  alamat: "jl.kesasar",
  isActive: true,
};
const UpdateKaryawan = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [karyawan, setKaryawan] = useState(defaultKaryawan);
  console.log(params.nik);

  const handleKaryawan = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setKaryawan((values) => ({ ...values, [name]: value }));
  };
  const handleEditKaryawan = (nik, karyawan, e) => {
    updateKaryawan(nik, karyawan, e).then((response) => {
      alert("data berhasil diupdate");
    });
    navigate("/admin/karyawan");
  };
  return (
    <>
      <Navbar />
      <main className="konten">
        <legend>Update</legend>
        <form>
          <input
            type="text"
            name="username"
            value={karyawan.username}
            onChange={handleKaryawan}
          />
          <input
            type="text"
            name="name"
            value={karyawan.name}
            onChange={handleKaryawan}
          />
          <input
            type="text"
            name="gender"
            value={karyawan.name}
            onChange={handleKaryawan}
          />
          <input
            type="text"
            name="departemen"
            value={karyawan.name}
            onChange={handleKaryawan}
          />
          <input
            type="text"
            name="name"
            value={karyawan.name}
            onChange={handleKaryawan}
          />
          <input
            type="text"
            name="isSPV"
            value={karyawan.name}
            onChange={handleKaryawan}
          />
          <input
            type="text"
            name="isAdmin"
            value={karyawan.name}
            onChange={handleKaryawan}
          />
          <input
            type="number"
            name="phone"
            value={karyawan.name}
            onChange={handleKaryawan}
          />
          <input
            type="text"
            name="alamat"
            value={karyawan.name}
            onChange={handleKaryawan}
          />
          <input
            type=""
            name="isActive"
            value={karyawan.name}
            onChange={handleKaryawan}
          />
          <button onClick={(e) => handleEditKaryawan(params.nik, karyawan, e)}>
            Update
          </button>
        </form>
        <p>{JSON.stringify(karyawan)}</p>
      </main>
    </>
  );
};
export default UpdateKaryawan;

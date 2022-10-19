import { useEffect, useState } from "react";
import Navbar from "../../../components/Navbar";
import { createKaryawan } from "../../../providers/admin.provider";

const defaultKaryawan = {
  username: "",
  password: "12345",
  name: "juzx",
  gender: "L",
  departemen: "IT",
  isSPV: true,
  isAdmin: false,
  phone: "091212",
  alamat: "jl.kesasar",
};
const CreateKaryawan = () => {
  const [karyawan, setKaryawan] = useState(defaultKaryawan);

  const handleTerima = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setKaryawan((values) => ({ ...values, [name]: value }));
  };
  const handleTambahKaryawan = (karyawan, e) => {
    createKaryawan(karyawan, e).then(() => alert("data berhasil ditambah"));
  };
  return (
    <>
      <Navbar />
      <main className="konten">
        <legend>Create</legend>
        <form>
          <input
            type="text"
            name="username"
            value={karyawan.username}
            onChange={handleTerima}
          />
					<button onClick={(e) => handleTambahKaryawan(karyawan, e)}>Tambah</button>
        </form>
        <p>{JSON.stringify(karyawan)}</p>
      </main>
    </>
  );
};
export default CreateKaryawan;

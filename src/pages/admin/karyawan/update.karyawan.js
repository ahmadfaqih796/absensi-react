import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../../../components/Navbar";
import { getDetailKaryawan, updateKaryawan } from "../../../providers/admin.provider";

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
  const [karyawan, setKaryawan] = useState([]);
  console.log(params.nik);

	useEffect(() => {
		getDetailKaryawan(params.nik).then((res) => {
			setKaryawan(res.data.data)
		})
	}, [params.nik]);

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
        <a href="/admin/karyawan" className="tambah">&#60;</a>
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
          <button onClick={(e) => handleEditKaryawan(params.nik, karyawan, e)}>
            Update
          </button>
        {/* <p>{JSON.stringify(karyawan)}</p> */}
      </main>
    </>
  );
};
export default UpdateKaryawan;

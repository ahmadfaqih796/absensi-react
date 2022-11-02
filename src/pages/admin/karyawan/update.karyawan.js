import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../../../components/Navbar";
import {
  getDetailKaryawan,
  updateKaryawan,
} from "../../../providers/admin.provider";
import QRcode from "qrcode";
const defaultKaryawan = {
  username: "",
  password: "",
  name: "",
  gender: "",
  departemen: "",
  phone: "",
  alamat: "",
  qrcode: "",
  isActive: true,
};
const UpdateKaryawan = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [karyawan, setKaryawan] = useState(defaultKaryawan);
  const [barcode, setBarcode] = useState("");

  useEffect(() => {
    getDetailKaryawan(params.nik).then((res) => {
      setKaryawan(res.data.data);
    });
  }, [params.nik]);

  const handleKaryawan = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setKaryawan((values) => ({ ...values, [name]: value }));
  };
  const generateQRcode = async () => {
    try {
      const res = await QRcode.toDataURL(karyawan.qrcode);
      setBarcode(res);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
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
        <legend>Update Karyawan</legend>
        <a href="/admin/karyawan" className="tambah">
          &#60;
        </a>
        <section className="form-qrcode">
          <input type="text" value={barcode} />
          <input
            type="submit"
            onClick={() => generateQRcode()}
            value={"Dapatkan Barcode"}
          />
        </section>
        <form className="karyawan">
          <div className="grup">
            <label htmlFor="qrcode">Barcode</label>
            <input
              type="text"
              name="qrcode"
							placeholder="isi barcode disini"
              value={karyawan.qrcode === karyawan.nik ? "" : karyawan.qrcode}
              onChange={handleKaryawan}
            />
          </div>
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
            <label htmlFor="password">Password</label>
            <input type="text" name="password" onChange={handleKaryawan} />
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
            <label htmlFor="isActive">Status keaktifan</label>
            <select
              name="isActive"
              value={karyawan.isActive}
              onChange={handleKaryawan}
            >
              <option value={true}>Aktif</option>
              <option value={false}>Tidak Aktif</option>
            </select>
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
      </main>
    </>
  );
};
export default UpdateKaryawan;

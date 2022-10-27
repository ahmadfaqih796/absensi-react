import Navbar from "../../../components/Navbar";
import { useEffect, useState } from "react";
import {
  deleteKaryawan,
  getAllKaryawan,
} from "../../../providers/admin.provider";

const DataKaryawan = () => {
  const [karyawan, setKaryawan] = useState([]);
  const [halaman, setHalaman] = useState(1);

  const maju = (num, e) => {
    const majuId = document.getElementById("maju");
    setHalaman(halaman + 1);
    getAllKaryawan(num, e).then((response) => {
      console.log(num);
      response.data.data.length === 2
        ? setKaryawan(response.data.data)
        : (majuId.style = "display:none");
      console.log(response);
    });
  };
  const mundur = (num, e) => {
    const mundurId = document.getElementById("mundur");
    setHalaman(halaman - 1);
    getAllKaryawan(num, e).then((response) => {
      console.log(num);
      response.data.data.length === 2
        ? setKaryawan(response.data.data)
        : (mundurId.style = "display:none");
      console.log(response);
    });
  };
  useEffect(() => {
    getAllKaryawan(halaman)
      .then((response) => {
        setKaryawan(response.data.data);
      })
      .catch((err) => {
        alert(err.message);
      });
  }, [halaman]);
  const handleDelete = (nik, e) => {
    deleteKaryawan(nik).then(() => {
      alert("data berhasil dihapus");
    });
  };

  return (
    <>
      <Navbar />
      <main className="konten">
        <legend>Karyawan</legend>
        <a href="/admin/karyawan/tambah" className="tambah">
          +
        </a>
        <table>
          <thead>
            <tr>
              <th rowSpan={2}>No</th>
              <th rowSpan={2}>NIK</th>
              <th rowSpan={2}>Username</th>
              <th rowSpan={2}>Nama</th>
              <th rowSpan={2}>Departemen</th>
              <th rowSpan={2}>Gender</th>
              <th rowSpan={2}>Status</th>
              <th colSpan={3}>Aksi</th>
            </tr>
            <tr>
              <th>Cetak</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {karyawan.map((data, index) => (
              <tr id="data" key={index}>
                <td>{index + 1}</td>
                <td>{data.nik}</td>
                <td>{data.username}</td>
                <td>{data.name}</td>
								<td>{data.departemen}</td>
                <td>{data.gender}</td>
                <td>{data.isActive ? "Aktif" : "Tidak Aktif"}</td>
                <td>
                  <a href={"/admin/karyawan/detail/" + data.nik} id="print">
                    <i className="fa-solid fa-print"></i>
                  </a>
                </td>
                <td>
                  <a href={"/admin/karyawan/update/" + data.nik} id="edit">
                    <i className="fa-solid fa-pen-to-square"></i>
                  </a>
                </td>
                <td>
                  <a
                    href="/admin/karyawan"
                    id="delete"
                    onClick={(e) => handleDelete(data.nik, e)}
                  >
                    <i className="fa-solid fa-trash"></i>
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex">
          <button id="mundur" onClick={(e) => mundur(halaman - 1, e)}>
            Mundur
          </button>
          <button>{halaman}</button>
          <button id="maju" onClick={(e) => maju(halaman + 1, e)}>
            Maju
          </button>
        </div>

        {/* <p>{JSON.stringify(karyawan)}</p> */}
      </main>
    </>
  );
};
export default DataKaryawan;

import Navbar from "../../../components/Navbar";
import { useEffect, useState } from "react";
import {
  deleteKaryawan,
  getAllKaryawan,
} from "../../../providers/admin.provider";

export const Posisi = ({ spv, admin }) => {
  if (admin === true && spv === true) {
    return (
      // admin
      "Admin"
    );
  } else if (admin === false && spv === true) {
    return (
      // spv
      "SPV"
    );
  } else {
    return (
      // karyawan
      "Karyawan"
    );
  }
};

const DataKaryawan = () => {
  const [karyawan, setKaryawan] = useState([]);
  const [page, setPage] = useState(1);
  const [mundur, setMundur] = useState(0);
  const [maju, setMaju] = useState(0);
  // const [total, setTotal] = useState(0);

  useEffect(() => {
    getAllKaryawan(page)
      .then((response) => {
        setKaryawan(response.data.data);
        setPage(response.data.page);
        setMundur(response.data.previousPage);
        setMaju(response.data.nextPage);
        // setTotal(response.data.totalPage);
        console.log(response.data.page + " page");
        console.log(response.data.previousPage + " mundur");
        console.log(response.data.nextPage + " maju");
        console.log(response.data.totalPage + " total");
      })
      .catch((err) => {
        alert(err.message);
      });
  }, [page]);
  const handleDelete = (nik, e) => {
    deleteKaryawan(nik).then(() => {
      alert("data berhasil dihapus");
    });
  };

  const next = (num, e) => {
    setPage(maju);
    setMaju(num + 1);
    const majuId = document.getElementById("maju");
    const mundurId = document.getElementById("mundur");
    getAllKaryawan(num, e).then((response) => {
      if (response.data.nextPage) {
        majuId.style = "display:block";
				mundurId.style = "display:block";
      } else {
        majuId.style = "display:none";
				mundurId.style = "display:block";
      }
      console.log(response);
      console.log(num);
    });
  };

  const previous = (num, e) => {
    setPage(mundur);
    setMundur(num + 1);
    const mundurId = document.getElementById("mundur");
    const majuId = document.getElementById("maju");
    getAllKaryawan(num, e).then((response) => {
      if (response.data.previousPage) {
        majuId.style = "display:block";
        mundurId.style = "display:block";
      } else {
        majuId.style = "display:block";
        mundurId.style = "display:none";
      }
      console.log(response);
      console.log(num);
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
              <th rowSpan={2}>Posisi</th>
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
                <td>
                  <Posisi spv={data.isSPV} admin={data.isAdmin} />
                </td>
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
          <button id="mundur" style={{display: "none"}} onClick={(e) => previous(mundur, e)}>
            Mundur
          </button>
          <button>{page}</button>
          <button id="maju" onClick={(e) => next(maju, e)}>
            Maju
          </button>
        </div>

        {/* <p>{JSON.stringify(karyawan)}</p> */}
      </main>
    </>
  );
};
export default DataKaryawan;

import Navbar from "../../../components/Navbar";
import { useEffect, useState } from "react";
import { deleteKaryawan, getAllKaryawan } from "../../../providers/admin.provider";

const DataKaryawan = () => {
  const [karyawan, setKaryawan] = useState([]);
  useEffect(() => {
    getAllKaryawan().then((response) => {
      setKaryawan(response.data.data);
    });
  }, []);
	const handleDelete = (nik, e) => {
		deleteKaryawan(nik).then(() => {
			alert("data berhasil dihapus")
		})
	}
  return (
    <>
      <Navbar />
      <main className="konten">
        <legend>Home</legend>
        <table>
          <thead>
            <tr>
              <th rowSpan={2}>No</th>
              <th rowSpan={2}>NIK</th>
              <th rowSpan={2}>Username</th>
              <th rowSpan={2}>Nama</th>
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
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{data.nik}</td>
                <td>{data.username}</td>
                <td>{data.name}</td>
                <td>{data.gender}</td>
                <td>{data.isActive ? "Aktif" : "Tidak Aktif"}</td>
                <td>
                  <a href="/" id="print">
                    <i className="fa-solid fa-print"></i>
                  </a>
                </td>
                <td>
                  <a href="/" id="edit">
                    <i className="fa-solid fa-pen-to-square"></i>
                  </a>
                </td>
                <td>
                  <a href="/admin/karyawan" id="delete"  onClick={(e) => handleDelete(data.nik, e)}>
                    <i className="fa-solid fa-trash"></i>
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <p>{JSON.stringify(karyawan)}</p>
      </main>
    </>
  );
};
export default DataKaryawan;

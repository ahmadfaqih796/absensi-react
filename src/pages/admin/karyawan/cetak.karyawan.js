import "../../../assets/css/user/cetak.css";
import logo from "../../../assets/image/logo-absensi.png";

const CetakKaryawan = ({ karyawan }) => {
  const Print = () => {
    //console.log('print');
    let printContents = document.getElementById("cetak").innerHTML;
    let originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
  };
  return (
    <>
      <div id="cetak">
        <header>
          <img src={logo} alt="asas" />
          <article>
            <h1>PT. QihToon</h1>
            <p>
              Jalan Pramuka No. 74, RT 03 RW 03, Kelurahan Sepanjang Jaya,
              Kecamatan Rawalumbu, Kota Bekasi, Jawa Barat, 17114
            </p>
          </article>
        </header>
        <hr />
        <h1 className="judul">Karyawan</h1>
        <table className="table-karyawan">
          <thead></thead>
          <tbody>
            <tr>
              <td>Nama</td>
              <td>:</td>
              <td>{karyawan.name}</td>
            </tr>
            <tr>
              <td>NIK</td>
              <td>:</td>
              <td>{karyawan.nik}</td>
            </tr>
            <tr>
              <td>Jenis Kelamin</td>
              <td>:</td>
              <td>{karyawan.gender}</td>
            </tr>
            <tr>
              <td>Departemen</td>
              <td>:</td>
              <td>{karyawan.isSPV ? "Manager" : "Karyawan"}</td>
            </tr>
            <tr>
              <td>Telepon</td>
              <td>:</td>
              <td>{karyawan.phone}</td>
            </tr>
            <tr>
              <td>Alamat</td>
              <td>:</td>
              <td>{karyawan.alamat}</td>
            </tr>
            <tr>
              <td>Status</td>
              <td>:</td>
              <td>{karyawan.isActive ? "Aktif" : "Tidak Aktif"}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <button onClick={Print}>cetak</button>
    </>
  );
};
export default CetakKaryawan;

import "../../../assets/css/user/cetak.css";
import logo from "../../../assets/image/logo-absensi.png";

const CetakLaporan = ({ laporan, tanggal }) => {
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
        <h1 className="judul">Laporan {tanggal}</h1>
        <table>
          <thead>
            <tr>
              <th>No</th>
              <th>Kode</th>
              <th>NIK</th>
              <th>Nama</th>
              <th>Klien</th>
              <th>Tugas</th>
              <th>Jam Mulai</th>
              <th>Jam Akhir</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {laporan.map((data, index) => (
              <tr id="data" key={index}>
                <td>{index + 1}</td>
                <td>{data.kodeLaporan}</td>
                <td>{data.nik}</td>
                <td>{data.name}</td>
                <td>{data.klien}</td>
                <td>{data.tugas}</td>
                <td>{data.jamMulai}</td>
                <td>{data.jamAkhir}</td>
                <td>{data.status ? "valid" : "tidak valid"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button onClick={Print} className="tombol-cetak">
        cetak
      </button>
    </>
  );
};
export default CetakLaporan;

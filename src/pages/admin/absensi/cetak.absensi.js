import "../../../assets/css/user/cetak.css";
import logo from "../../../assets/image/logo-absensi.png";

const CetakAbsensi = ({ absensi, tanggal }) => {
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
        <h1 className="judul">Absensi {tanggal}</h1>
        <table>
				<thead>
            <tr>
              <th>No</th>
              <th>Kode Absen</th>
              <th>NIK</th>
              <th>Nama</th>
              <th>Jam Masuk</th>
              <th>Jam Pulang</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {absensi.map((data, index) => (
              <tr id="data" key={index}>
                <td>{index + 1}</td>
                <td>{data.kodeAbsen}</td>
                <td>{data.nik}</td>
                <td>{data.name}</td>
                <td>{data.jamMasuk}</td>
                <td>{data.jamPulang}</td>
                <td>{data.status ? "valid" : "belum valid"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button onClick={Print} className="tombol-cetak">cetak</button>
    </>
  );
};
export default CetakAbsensi;

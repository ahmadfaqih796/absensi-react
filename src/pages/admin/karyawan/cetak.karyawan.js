import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../../components/Navbar";
import {
  createKaryawan,
  getDetailKaryawan,
} from "../../../providers/admin.provider";

const CetakKaryawan = () => {
  const params = useParams();
  const [karyawan, setKaryawan] = useState([]);
  console.log(params.nik);
  useEffect(() => {
    getDetailKaryawan(params.nik).then((res) => {
      setKaryawan(res.data.data);
    });
  }, []);
  const Print = () =>{     
		//console.log('print');  
		let printContents = document.getElementById('cetak').innerHTML;
		let originalContents = document.body.innerHTML;
		document.body.innerHTML = printContents;
		window.print();
	 document.body.innerHTML = originalContents; 
	}
  return (
    <>
      <Navbar />
      <main className="konten">
        <legend>Cetak</legend>
				<h1>{karyawan.name}</h1>
				<div id="cetak">
					<h1>{karyawan.name}</h1>
				</div>
				<button onClick={Print}>cetak</button>
        <p>{JSON.stringify(karyawan)}</p>
      </main>
    </>
  );
};
export default CetakKaryawan;

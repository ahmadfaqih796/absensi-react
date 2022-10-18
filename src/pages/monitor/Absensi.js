import { useEffect, useRef } from "react";

const Absensi = () => {
  const videoRef = useRef(null);

  const getVideo = () => {
    navigator.mediaDevices
      .getUserMedia({
        video: { width: 1920, height: 1080 },
      })
      .then((stream) => {
        let video = videoRef.current;
        video.srcObject = stream;
        video.play();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getVideo();
  }, [videoRef]);
  return (
    <>
      <h1>Silahkan Absensi</h1>
      <video src="" ref={videoRef}></video>
      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>NIK</th>
            <th>Nama Karyawan</th>
            <th>Departemen</th>
            <th>Jam Masuk</th>
            <th>Jam Pulang</th>
          </tr>
        </thead>
        <tbody>
					
				</tbody>
      </table>
    </>
  );
};
export default Absensi;

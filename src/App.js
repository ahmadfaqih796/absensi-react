import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import "./assets/css/root.css";
import LoginAdmin from "./pages/admin/Login";
import Absensi from "./pages/monitor/Absensi";
import DataKaryawan from "./pages/admin/karyawan/data.karyawan";
import Beranda from "./pages/admin/Beranda";
import UpdateKaryawan from "./pages/admin/karyawan/update.karyawan";
import DetailKaryawan from "./pages/admin/karyawan/detail.karyawan";
import { useState } from "react";
import Authorized from "./pages/admin/Authorized";
import BerandaKaryawan from "./pages/karyawan/beranda.karyawan";
import CreateKaryawan from "./pages/admin/karyawan/create.karyawan";
import CreateLaporanKaryawan from "./pages/karyawan/create.laporan";
import BerandaSpv from "./pages/spv/beranda.spv";
const Protected = () => {
  const lokal = {
    token: localStorage.getItem("token"),
    status: localStorage.getItem("status"),
  };
  const [isAuthenticated, setIsAuthenticated] = useState(lokal);
  // const isAuthenticated = lokal
  if (isAuthenticated) {
    return isAuthenticated.status === "false" ? <Authorized /> : <Outlet />;
  } else {
    return <LoginAdmin />;
  }
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin" element={<Protected />}>
          <Route index element={<Beranda />} />
          <Route path="/admin/karyawan" element={<DataKaryawan />} />
          <Route
            path="/admin/karyawan/tambah"
            element={<CreateKaryawan />}
          />
          <Route
            path="/admin/karyawan/update/:nik"
            element={<UpdateKaryawan />}
          />
          <Route
            path="/admin/karyawan/detail/:nik"
            element={<DetailKaryawan />}
          />
        </Route>
        {/* karyawan */}
        <Route path="/karyawan" element={<Protected />}>
          <Route index element={<BerandaKaryawan />} />
          <Route
            path="/karyawan/laporan/create"
            element={<CreateLaporanKaryawan />}
          />
        </Route>
				{/* spv */}
        <Route path="/spv" element={<Protected />}>
          <Route index element={<BerandaSpv />} />
        </Route>
        <Route path="/" element={<LoginAdmin />} />
        <Route path="/login" element={<LoginAdmin />} />
        <Route path="/absensi" element={<Absensi />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

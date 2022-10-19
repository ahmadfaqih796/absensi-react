import { useState } from "react";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import "./assets/css/root.css";
import LoginAdmin from "./pages/admin/Login";
import Absensi from "./pages/monitor/Absensi";
import DataKaryawan from "./pages/admin/karyawan/data.karyawan";
import Beranda from "./pages/admin/Beranda";
const Protected = () => {
	const [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem("token"))
  return <>
      {isAuthenticated ? <Outlet />: <LoginAdmin />}
    </>
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin/" element={<Protected />}>
          <Route index element={<Beranda />} />
          {/* <Route path='/' element={<Detail />} />
          <Route path='/chapter/:id' element={<Chapter />} /> */}
          {/* <Route path="/transaksi" element={<TransaksiPage />} /> */}
          
        </Route>
				<Route path="/admin/beranda" element={<Beranda />}/>
				<Route path="/admin/karyawan" element={<DataKaryawan />}/>
        <Route path="/login" element={<LoginAdmin />} />
        <Route path='/absensi' element={<Absensi />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
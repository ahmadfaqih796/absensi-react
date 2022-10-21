import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import "./assets/css/root.css";
import LoginAdmin from "./pages/admin/Login";
import Absensi from "./pages/monitor/Absensi";
import DataKaryawan from "./pages/admin/karyawan/data.karyawan";
import Beranda from "./pages/admin/Beranda";
import CreateKaryawan from "./pages/admin/karyawan/create.karyawan";
import UpdateKaryawan from "./pages/admin/karyawan/update.karyawan";
import DetailKaryawan from "./pages/admin/karyawan/detail.karyawan";
const Protected = () => {
	// const [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem("token"))
	const isAuthenticated = localStorage.getItem("token")
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
					<Route path="/admin/karyawan" element={<DataKaryawan />}/>
					<Route path="/admin/karyawan/tambah" element={<CreateKaryawan />}/>
					<Route path="/admin/karyawan/update/:nik" element={<UpdateKaryawan />}/>
					<Route path="/admin/karyawan/detail/:nik" element={<DetailKaryawan />}/>
        </Route>
				<Route path="/" element={<LoginAdmin />}/>
        <Route path="/admin/login" element={<LoginAdmin />} />
        <Route path='/absensi' element={<Absensi />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

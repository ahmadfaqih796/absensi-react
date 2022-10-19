import { useState } from "react";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import "./assets/css/root.css";
import LoginAdmin from "./pages/admin/Login";
import Absensi from "./pages/monitor/Absensi";
import Beranda from "./pages/admin/Beranda";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const Protected = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem("token"))
  return <>
      {isAuthenticated ? <Outlet />: <LoginAdmin />}
    </>
};

function App() {
  return (
    <BrowserRouter>
     <Navbar/>
      <Routes>
        <Route path="/admin/" element={<Protected />}>
          <Route index element={<Beranda />} />
          {/* <Route path='/' element={<Detail />} />
          <Route path='/chapter/:id' element={<Chapter />} /> */}
          {/* <Route path="/transaksi" element={<TransaksiPage />} /> */}
          
        </Route>
				<Route path="/admin/beranda" element={<Beranda />}/>
        <Route path="/login" element={<LoginAdmin />} />
        <Route path='/absensi' element={<Absensi />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;

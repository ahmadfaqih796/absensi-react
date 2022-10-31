import { useNavigate } from "react-router-dom";

const Authorized = () => {
  const navigate = useNavigate();
  const handleLogout = (e) => {
    localStorage.removeItem("token");
    localStorage.removeItem("admin");
    localStorage.removeItem("spv");
    localStorage.removeItem("status");
    navigate("/login");
  };
  return (
    <>
      <section className="authorized">
        <legend>Status Tidak Aktif</legend>
        <h1>Akun anda sudah tidak aktif segera hubungi admin !!!!</h1>
        <button onClick={handleLogout}>Logout</button>
      </section>
    </>
  );
};
export default Authorized;

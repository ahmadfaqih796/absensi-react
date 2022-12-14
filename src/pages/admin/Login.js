import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../assets/css/user/login.css";
import logoAdmin from "../../assets/image/absen.png";
import { SigninAdminProvider } from "../../providers/admin.provider";
function LoginAdmin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    SigninAdminProvider(username, password)
      .then((response) => {
        let data = response.data;
        localStorage.setItem("token", `JWT ${data.token}`);
        localStorage.setItem("status", data.isActive);
        localStorage.setItem("admin", data.isAdmin);
        localStorage.setItem("spv", data.isSPV);
        localStorage.setItem("nik", data.nik);
        const admin = localStorage.getItem("admin", data.isAdmin);
        const spv = localStorage.getItem("spv", data.isSPV);
        if (admin === "true" && spv === "true") {
          navigate("/admin");
        } else if (admin === "false" && spv === "true") {
          navigate("/spv");
        } else {
          navigate("/karyawan");
        }
      })
      .catch((err) => alert(err.response.data.Message));
  };
  return (
    <main className="tampilan-login">
      <section className="card">
        <img src={logoAdmin} alt="adminlogo" />
        <form action="">
          <div className="grup">
            <label htmlFor="">Username</label>
            <input
              type="text"
              name="username"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="grup">
            <label htmlFor="">Password</label>
            <input
              type="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="grup">
            <input type="submit" onClick={handleLogin} value={"login"} />
          </div>
        </form>
        {/* {JSON.stringify([username, password])} */}
      </section>
    </main>
  );
}

export default LoginAdmin;

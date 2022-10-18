import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../assets/css/user/login.css'
import logoAdmin from '../../assets/image/AdminLogo.png'
import { SigninAdminProvider } from '../../providers/admin.provider';
function LoginAdmin() {
	const [username, setUsername] = useState("")
	const [password, setPassword] = useState("")
	const navigate = useNavigate();

	
	const handleLogin = (e) => {
		e.preventDefault();
    SigninAdminProvider(username, password)
      .then((response) => {
        let data = response.data;
        localStorage.setItem("token", `JWT ${data.token}`);
        localStorage.setItem("email", data.email);
        localStorage.setItem("IS_LOGIN", true);
        navigate("/Beranda");
      })
      .catch((err) => alert(err));
	}
  return (
    <main className="tampilan-login">
      <section className="card">
        <img src={logoAdmin} alt="adminlogo" />
        <form action="">
          <div className="grup">
            <label htmlFor="">Username</label>
            <input type="text" />
          </div>
          <div className="grup">
            <label htmlFor="">Password</label>
            <input type="password" />
          </div>
        </form>
      </section>
    </main>
  );
}

export default LoginAdmin;

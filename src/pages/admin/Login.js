import '../../assets/css/user/login.css'
function LoginAdmin() {
  return (
    <main className="tampilan-login">
      <section className="card">
        <img src={Image} alt="adminlogo" />
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

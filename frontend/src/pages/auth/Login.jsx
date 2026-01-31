import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { loginUser } from "../../services/authService";
import "./Login.css"; // ✅ if your css is in src/styles/Login.css

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await loginUser({ email, password });

      sessionStorage.setItem("token", res.data.token);
      sessionStorage.setItem("role", res.data.role);
      sessionStorage.setItem("name", res.data.name);

      if (res.data.role === "ADMIN") navigate("/admin/dashboard");
      else navigate("/user");
    } catch (err) {
      console.log(err);
      alert(err.response?.data?.message || "Login Failed");
      navigate("/register");
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h2 className="login-title">Login</h2>
        <p className="login-subtitle">Welcome back! Please login to continue</p>

        <form className="login-form" onSubmit={handleLogin} autoComplete="off">
          <div className="input-group">
            <input
              placeholder="Email..."
              name="user_email_xyz"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="off"
              required
            />
          </div>

          <div className="input-group">
            <input
              placeholder="Password..."
              type="password"
              name="pass_xyz"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="new-password"
              required
            />
          </div>

          <button className="login-btn" type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

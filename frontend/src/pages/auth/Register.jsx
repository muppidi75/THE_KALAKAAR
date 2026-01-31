import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { registerUser } from "../../services/authService";
import "./Register.css"; // ✅ if css is in src/styles/Register.css


export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("USER");

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      await registerUser({ name, email, password, role });
      alert("Registered successfully!");
      navigate("/login");
    } catch (err) {
      console.log(err);
      alert(err.response?.data?.message || "Register failed!");
    }
  };

  return (
    <div className="register-page">
      <div className="register-card">
        <h2 className="register-title">Register</h2>
        <p className="register-subtitle">Create your account to get started</p>

        <form className="register-form" onSubmit={handleRegister} autoComplete="off">
          {/* ✅ Dummy fields to stop Chrome autofill styling */}
          <input type="text" name="fake-email" style={{ display: "none" }} />
          <input type="password" name="fake-pass" style={{ display: "none" }} />

          <div className="input-group">
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              autoComplete="off"
            />
          </div>

          <div className="input-group">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="off"
            />
          </div>

          <div className="input-group">
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete="new-password"
            />
          </div>

          {/* ✅ Role dropdown (arrow only here) */}
          <div className="input-group role-group">
            <select value={role} onChange={(e) => setRole(e.target.value)}>
             <option value="USER">USER</option>
             <option value="ADMIN">ADMIN</option>
            </select>
          </div>

          <button className="register-btn" type="submit">
            Register
          </button>

          <p className="login-link">
            Already have an account?{" "}
            <span onClick={() => navigate("/login")}>Login</span>
          </p>
        </form>
      </div>
    </div>
  );
}

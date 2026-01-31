import React from "react";
import { NavLink } from "react-router-dom";
import { LogOut } from "lucide-react";
import "./Navbar.css";

export default function Navbar() {
  const handleLogout = () => {
    sessionStorage.clear();
    window.location.href = "/login";
  };

  return (
    <nav className="navbar">
      {/* Left */}
      <div className="nav-left">
        <h2 className="logo">THE KALAKAAR</h2>
      </div>

      {/* Center */}
      <ul className="nav-center">
        <li>
          <NavLink
            to="/user/canvas"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Canvas
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/user/collections"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Collections
          </NavLink>
        </li>


        <li>
          <NavLink
            to="/user/story"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            My Story
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/user/contact"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Reach Us
          </NavLink>
        </li>
      </ul>

     {/* Right */}
<div className="nav-right">
  <button onClick={handleLogout} title="Logout">
    Logout
  </button>
</div>

    </nav>
  );
}

import Navbar from "../navbar/Navbar";
import { Outlet } from "react-router-dom";

export default function UserLayout() {
  return (
    <div>
      <Navbar />
      <div style={{ padding: 0 }}>
        <Outlet />
      </div>
    </div>
  );
}

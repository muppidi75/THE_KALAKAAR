import Sidebar from "../adminComponents/AdminSide";
import Topbar from "../adminComponents/AdminTopbar";
import { Outlet } from "react-router-dom";

export default function AdminLayout() {
  return (
    <div style={styles.container}>
      <Sidebar />

      <div style={styles.main}>
        <Topbar />
        <div style={styles.content}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    minHeight: "100vh",
    backgroundColor: "#f4f6f8"
  },
  main: {
    flex: 1,
    display: "flex",
    flexDirection: "column"
  },
  content: {
    padding: "20px"
  }
};

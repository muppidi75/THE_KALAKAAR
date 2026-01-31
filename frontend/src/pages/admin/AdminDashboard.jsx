import { useEffect, useState } from "react";
import axios from "../../services/api";
import "./adminDashboard.css";

export default function AdminDashboard() {

  const [stats, setStats] = useState({
    totalUsers: 0,
    totalArtworks: 0,
    totalAnnouncements: 0
  });

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      // const res = await axios.get("http://localhost:8080/api/admin/dashboard/stats");
      const res=await api.get("/admin/dashboard/stats");
      setStats(res.data);
    } catch (err) {
      console.log("Stats error", err);
    }
  };

  return (
    <div className="admin-dashboard">

      <h1 className="admin-title">Overview</h1>
      <p className="admin-subtitle">Welcome to the Admin Dashboard.</p>

      <div className="stats-container">

        <div className="stat-card">
          <p className="stat-title">Total Users</p>
          <h2 className="stat-value">{stats.totalUsers}</h2>
        </div>

        <div className="stat-card">
          <p className="stat-title">Total Artworks</p>
          <h2 className="stat-value">{stats.totalArtworks}</h2>
        </div>

        <div className="stat-card">
          <p className="stat-title">Announcements</p>
          <h2 className="stat-value">{stats.totalAnnouncements}</h2>
        </div>

      </div>

    </div>
  );
}

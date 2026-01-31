import "./adminAnnouncements.css";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Announcements() {

  const [announcement, setAnnouncement] = useState("");
  const [announcementsList, setAnnouncementsList] = useState([]);

  /* ---------------- Fetch All Announcements ---------------- */

  const fetchAnnouncements = () => {
    axios.get("http://localhost:8080/api/admin/all-announcements", {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("token")}`
      }
    })
    .then(res => setAnnouncementsList(res.data))
    .catch(err => console.log(err));
  };

  useEffect(() => {
    fetchAnnouncements();
  }, []);

  /* ---------------- Publish ---------------- */

  const handlePublish = async () => {

    if (!announcement.trim()) {
      alert("Announcement cannot be empty");
      return;
    }

    try {
      await axios.post(
        "http://localhost:8080/api/admin/announcements",
        announcement,
        {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("token")}`,
            "Content-Type": "text/plain"
          }
        }
      );

      setAnnouncement("");
      fetchAnnouncements();   // 🔥 refresh list
      alert("Announcement Published!");

    } catch (err) {
      console.log(err);
      alert("Failed to publish");
    }
  };

  return (
    <div className="announce-container">

      <h1>Broadcasts</h1>

      {/* CREATE */}
      <div className="announce-card">

        <h3>Create Announcement</h3>

        <textarea
          placeholder="Write your announcement here..."
          value={announcement}
          onChange={(e) => setAnnouncement(e.target.value)}
        />

        <button className="publish-btn" onClick={handlePublish}>
          Publish
        </button>

      </div>

      {/* LIST */}
      <div className="announce-list">

        <h3>All Announcements</h3>

        {announcementsList.length === 0 && (
          <p>No announcements yet.</p>
        )}

        {announcementsList.map(a => (
          <div key={a.id} className="announce-item">
            <p>{a.message}</p>
            <span>{new Date(a.createdAt).toLocaleString()}</span>
          </div>
        ))}

      </div>

    </div>
  );
}

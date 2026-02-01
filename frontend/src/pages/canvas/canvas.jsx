import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./canvas.css";
import api from "../../services/api";

export default function Canvas() {

  const navigate = useNavigate();
  const name = sessionStorage.getItem("name") || "ARTIST";

  /* -------- Recent Feedback -------- */
  const [recentFeedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    api.get("/user/canvas/recentFeedback")
      .then(res => setFeedbacks(res.data))
      .catch(err => console.log("Feedback error:", err));
  }, []);

  /* -------- Announcement -------- */
  const [announcement, setAnnouncement] = useState(null);

  useEffect(() => {
    api.get("/user/latest-announcement")
      .then(res => setAnnouncement(res.data))
      .catch(err => console.log("Announcement error:", err));
  }, []);

  return (
    <div className="canvas-page">

      {/* Welcome */}
      <div className="welcome-box">
        <h2>WELCOME {name}</h2>
        <h1>Your creative space starts on the <span>Canvas.</span></h1>
        <p>Explore collections, read inspiring stories, and connect with THE KALAKAAR.</p>
      </div>

      <div className="main-layout">

        {/* Left */}
        <div className="canvas-area">
          <h3>CANVAS</h3>

          <div className="canvas-image">
            <img src="/assests/Register.jpg" alt="canvas" />
          </div>

          <div className="bottom-cards">

            <div className="nav-card" onClick={() => navigate("/user/collections")}>
              <h4>Explore Collections</h4>
              <p>Browse curated artworks</p>
            </div>

            <div className="nav-card" onClick={() => navigate("/user/story")}>
              <h4>My Story</h4>
              <p>Read about my journey</p>
            </div>

            <div className="nav-card" onClick={() => navigate("/user/contact")}>
              <h4>Reach Us</h4>
              <p>Support & feedback</p>
            </div>

          </div>
        </div>

        {/* Right */}
        <div className="side-panel">

          {/* Feedback */}
          <div className="panel-card">
            <h3>Recent Feedback</h3>

            {recentFeedbacks.length === 0 ? (
              <p>No feedback yet.</p>
            ) : (
              recentFeedbacks.map((f, i) => (
                <div key={i} className="feedback-item">
                  <strong>{f.name}</strong>
                  <p>{f.message}</p>
                </div>
              ))
            )}
          </div>

          {/* Announcement */}
          <div className="panel-card">
            <h3>Latest Announcement</h3>

            {announcement ? (
              <p>📢 {announcement.message}</p>
            ) : (
              <p>No announcements yet.</p>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}

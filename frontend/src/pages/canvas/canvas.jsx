import React from "react";
import { useNavigate } from "react-router-dom";
import "./canvas.css";
import { useState, useEffect } from "react";
import axios from "axios";   // ✅ ADD THIS
import api from "../../services/api";

export default function Canvas() {
  const navigate = useNavigate();
  const name = sessionStorage.getItem("name") || "ARTIST";

  /* ---------------- Recent Feedback ---------------- */

  const [recentFeedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    // fetch("http://localhost:8080/api/user/canvas/recentFeedback")
    useEffect(() => {
    api.get("/user/canvas/recentFeedback")
      .then(res => setFeedbacks(res.data))
      .catch(err => console.log("Feedback error:", err));
  }, []);

  /* ---------------- Announcements ---------------- */

  const [announcement, setAnnouncement] = useState(null);

  useEffect(() => {
    // axios.get("http://localhost:8080/api/user/latest-announcement")
    api.get("/user/latest-announcement")

      .then(res => setAnnouncement(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="canvas-page">

      {/* ===== Welcome Section ===== */}
      <div className="welcome-box">
        <h2>WELCOME {name}</h2>
        <h1>Your creative space starts on the <span>Canvas.</span></h1>
        <p>
          Explore collections, read inspiring stories, and connect with THE KALAKAAR community.
        </p>
      </div>

      <div className="main-layout">

        {/* ===== Left Canvas Area ===== */}
        <div className="canvas-area">
          <h3>CANVAS</h3>

          <div className="canvas-image">
            <img src="/assests/Register.jpg" alt="canvas" />
          </div>

          {/* Bottom Navigation Cards */}
          <div className="bottom-cards">

            <div className="nav-card" onClick={() => navigate("/user/collections")}>
              <h4>Explore Collections</h4>
              <p>Browse curated artworks</p>
            </div>

            <div className="nav-card" onClick={() => navigate("/user/story")}>
              <h4>My Story</h4>
              <p>Read about my creative journey</p>
            </div>

            <div className="nav-card" onClick={() => navigate("/user/contact")}>
              <h4>Reach Us</h4>
              <p>Support, feedback & collaboration</p>
            </div>

          </div>
        </div>

        {/* ===== Right Panel ===== */}
        <div className="side-panel">

          {/* Recent Feedback */}
          <div className="panel-card">
            <h3>Recent Feedback</h3>

            {recentFeedbacks.map((f, index) => (
              <div key={index} className="feedback-item">
                <strong>{f.name}</strong>
                <p>Comment: <strong>{f.message}</strong></p>
              </div>
            ))}
          </div>

          {/* Announcements */}
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

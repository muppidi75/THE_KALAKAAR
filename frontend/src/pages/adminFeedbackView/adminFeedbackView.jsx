import "./adminFeedbackView.css";
import { useEffect, useState } from "react";
import axios from "axios";
import api from "../../services/api";

export default function AdminFeedback() {

  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    // api.get("http://localhost:8080/api/admin/feedback", {
    api.get("/admin/feedback", {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("token")}`
      }
    })
    .then(res => setFeedbacks(res.data))
    .catch(err => console.log(err));
  }, []);

  return (
    <div className="feedback-container">

      <h1>User Feedback</h1>

      <div className="feedback-grid">

        {feedbacks.map(f => (
          <div key={f.id} className="feedback-card">

            <h3>{f.name}</h3>
            <p className="email">{f.email}</p>

            <p className="message">{f.message}</p>

            <div className="rating">
              ⭐ {f.rating} / 5
            </div>

          </div>
        ))}

      </div>

    </div>
  );
}

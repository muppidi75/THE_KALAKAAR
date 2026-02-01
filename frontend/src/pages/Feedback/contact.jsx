import React, { useState,useEffect } from "react";
import "./contact.css";
import { name } from "../../../package.json";
import api from "../../services/api";

export default function ReachUs() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    rating: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

const [feedbacks, setFeedbacks] = useState([]);
 useEffect(() => {
  // fetch("http://localhost:8080/api/user/canvas/feedback")
     api.get("/user/canvas/feedback")
    .then(res => res.json())
    .then(data => setFeedbacks(data))
    .catch(err => console.log(err));
}, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);   // Later send to backend
    setSubmitted(true);
     try {
      const response = await api.post("/user/contact", formData);

      if (response.status === 200 || response.status === 201) {
        setSubmitted(true);
        alert("Message sent successfully");
      } else {
        alert("Failed to send message");
      }

    } catch (err) {
      console.error(err);
      alert("Network error");
    }
  };


  return (
    <div className="reach-container">

      {/* LEFT FORM */}
      <div className="reach-form-card">

        <h2>Reach Us 📩</h2>
        <p>Got a question, feedback, or collaboration idea? Send us a message!</p>

        <form onSubmit={handleSubmit}>

          <label>{name}</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label>Message</label>
          <textarea
            name="message"
            placeholder="Write your message..."
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
          />

          <label>Rating</label>

          <div className="star-rating">
            {[5,4,3,2,1].map((num) => (
              <React.Fragment key={num}>
                <input
                  type="radio"
                  id={`star${num}`}
                  name="rating"
                  value={num}
                  onChange={handleChange}
                />
                <label htmlFor={`star${num}`}>★</label>
              </React.Fragment>
            ))}
          </div>

          <button type="submit">Send Message</button>

        </form>

      </div>

      {/* RIGHT COLUMN */}
      <div className="right-column">

        {/* THANK YOU */}
        <div className="thankyou-card">
          <h3>Thank You 💛</h3>

          {submitted ? (
            <>
              <p>Your message has been sent!</p>
              <p>⭐ Rating Given: {formData.rating}</p>
            </>
          ) : (
            <p>We look forward to hearing from you.</p>
          )}
        </div>

        {/* CONTACT DETAILS */}
        <div className="contact-card">
          <h3>Contact Details</h3>
          <p>📧 thekalakaar@gmail.com</p>
          <p>📍 Hyderabad, India</p>
          <p>⏱ Response Time: Within 24 Hours</p>
        </div>

        {/* RECENT FEEDBACK */}
        <div className="user-feedback-card">
               <h3>Recent Feedback</h3>

              {feedbacks.length === 0 ? (
                         <p>No feedback yet</p>
                           ) : (
                          feedbacks.map((fb) => (
                <div key={fb.id} className="feedback-item">
                {"⭐".repeat(fb.rating)} {fb.message}
                   </div>
              ))
             )}
          </div>

      </div>

    </div>
  );
}

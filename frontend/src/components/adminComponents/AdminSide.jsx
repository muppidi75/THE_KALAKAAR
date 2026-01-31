import { NavLink } from "react-router-dom";
import "./AdminSide.css";

export default function Sidebar() {
  return (
    <div className="admin-sidebar">

      <h2 className="admin-logo">Admin Panel</h2>

      <NavLink
        to="/admin/dashboard"
        className="admin-link"
      >
        Dashboard
      </NavLink>

      <NavLink
        to="/admin/artworks"
        className="admin-link"
      >
        Media Library
      </NavLink>
 

      <NavLink
        to="/admin/announcements"
        className="admin-link"
      >
        Broadcasts
      </NavLink>

       <NavLink
        to="/admin/users"
        className="admin-link"
      >
        User Management
      </NavLink>


       <NavLink
        to="/admin/userFeedback"
        className="admin-link"
      >
        User Feedback
      </NavLink>

      <NavLink
        to="/admin/ArtEditor"
        className="admin-link"
      >
        Art Editor
      </NavLink>
      

       <NavLink
        to="/admin/StoryEditor"
        className="admin-link"
      >
        Story Editor
      </NavLink>



    </div>
  );
}

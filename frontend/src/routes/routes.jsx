import { Routes, Route } from "react-router-dom";

// ✅ Pages
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";

import AdminDashboard from "../pages/admin/AdminDashboard";
import UserDashboard from "../pages/user/UserDashBoard";

import Story from "../pages/story/story";
import Collections from "../pages/collections/collections";
import Canvas from "../pages/canvas/canvas";
import Contact from "../pages/Feedback/contact";
import Users from "../pages/adminUserList/adminUserList";
import Artworks from "../pages/adminArtUpdates/adminArtUpdates";
import AdminFeedback from "../pages/adminFeedbackView/adminFeedbackView";
// import AdminStoryEditor from "../pages/adminStoryEditor/adminStoryEditor";
import AdminArtEditor from "../pages/adminArtEditor/adminArtEditor";



// ✅ Layouts
import UserLayout from "../components/layout/UserLayout";
import AdminLayout from "../components/layout/AdminLayout";

// ✅ Protection
import ProtectedRoute from "../components/protectedRoute";
import Announcements from "../pages/adminAnnouncements/adminAnnouncements";

export default function AppRoutes() {
  return (
    <Routes>

      {/* ---------------- PUBLIC ---------------- */}
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* ---------------- USER ---------------- */}
      <Route
        path="/user"
        element={
          <ProtectedRoute allowedRoles={["USER", "ADMIN"]}>
            <UserLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<Canvas />} />
        <Route path="canvas" element={<Canvas />} />
        <Route path="contact" element={<Contact />} />
        <Route path="story" element={<Story />} />
        <Route path="collections" element={<Collections />} />
      </Route>

      {/* ---------------- ADMIN ---------------- */}
      <Route
        path="/admin"
        element={
          <ProtectedRoute allowedRoles={["ADMIN"]}>
            <AdminLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<AdminDashboard />} />
        <Route path="dashboard" element={<AdminDashboard />} />
        {/* Future pages */} 
        <Route path="users" element={<Users />} />
        <Route path="artworks" element={<Artworks />} />
        <Route path="announcements" element={<Announcements />} />
        <Route path="userFeedback" element={<AdminFeedback />} />
        <Route path="StoryEditor" element={<h2>Story Editor Page</h2>} />
        <Route path="ArtEditor" element={<AdminArtEditor />} />
      </Route>

      {/* ---------------- OTHERS ---------------- */}
      <Route path="/unauthorized" element={<h2>Unauthorized ❌</h2>} />
      <Route path="*" element={<h2>Page Not Found</h2>} />

    </Routes>
  );
}

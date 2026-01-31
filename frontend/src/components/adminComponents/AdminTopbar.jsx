import "./AdminTopbar.css";

export default function AdminTopbar() {

    const name = sessionStorage.getItem("name");   
    
     const handleLogout = () => {
    sessionStorage.clear();
    window.location.href = "/login";
  };
  return (
    <div className="admin-topbar">

      {/* LEFT SPACE */}
      <div className="topbar-left"></div>

      {/* CENTER TITLE */}
      <h2 className="admin-title">THE KALAKAAR - {name?.toUpperCase()}</h2>

      {/* RIGHT ACTIONS */}
      <div className="admin-actions">
        <button onClick={handleLogout} className="admin-logout-btn">Logout</button>
      </div>

    </div>
  );
}

export default function UserDashboard() {
   const name = sessionStorage.getItem("name");

  return (
    <div style={{ padding: 30 }}>
      <h2>User Dashboard</h2>
      <p>Welcome {name} 🎨</p>
    </div>
  );
}

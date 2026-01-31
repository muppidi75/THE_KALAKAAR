import "./adminUserList.css";
import { useEffect, useState } from "react";
import axios from "axios";

 

export default function UsersList() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
  axios.get("http://localhost:8080/api/admin/users", {
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem("token")}`
    }
  })
  .then((res) => {
    setUsers(res.data);
  })
  .catch((err) => {
    console.error("Error fetching users:", err);
  });
}, []);

  return (
    <div className="users-container">
      <h1>User Management</h1>

      <table className="users-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

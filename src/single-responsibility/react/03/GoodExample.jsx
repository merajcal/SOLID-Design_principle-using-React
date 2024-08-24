import React, { useState, useEffect } from "react";

/**
 *
 * Good Example - Separation of Data Fetching and Presentation
 */
function UserList({ users }) {
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}

function UserListContainer() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("/api/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div>
      <h1>User List</h1>
      <UserList users={users} />
    </div>
  );
}

export default UserListContainer;
